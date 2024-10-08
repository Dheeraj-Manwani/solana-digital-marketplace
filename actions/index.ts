"use server";

import db from "@/app/db";
import nacl from "tweetnacl";
import { Product } from "@/app/lib/zod";
import { PublicKey } from "@solana/web3.js";
// import { EmailTemplate } from "@/components/email-template";
// import { Resend } from "resend";
import { useConnection } from "@solana/wallet-adapter-react";

export const saveProduct = async (
  id: number,
  title: string,
  description: string,
  cost: number,
  images: string[],
  publicKey: string,
  signature: any
) => {
  const zodres = Product.safeParse({ id, title, description, cost, images });

  if (zodres.success) {
    //
    const message = new TextEncoder().encode(
      "Sign in to project made by Dheeraj for Solana 100xdevs hackathon?"
    );

    const result = nacl.sign.detached.verify(
      message,
      new Uint8Array(signature.data),
      new PublicKey(publicKey).toBytes()
    );
    if (result) {
      const product = await db.user.update({
        where: {
          id,
        },
        data: {
          products: {
            create: [
              {
                title: title,
                description: description,
                cost: cost * 1_000_000_000,
                payTo: publicKey,
                images: {
                  createMany: {
                    data: images.map((img) => {
                      return { imageUrl: img };
                    }),
                  },
                },
              },
            ],
          },
        },
      });

      return { success: true, message: "Product created successfully!!" };
    } else {
      return {
        success: false,
        message: "Wallet verification failed",
      };
    }
  } else {
    return { success: false, message: zodres.error.issues[0].message };
  }
};

export const getProducts = async () => {
  const products = await db.product.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      cost: true,
      images: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return products;
};

export const getProductById = async (id: number) => {
  const product = await db.product.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      payTo: true,
      cost: true,
      images: true,
      seller: {
        select: {
          id: true,
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  return product;
};

export const verifyTransactionSignature = async (signature: string) => {
  const { connection } = useConnection();
  const transaction = await connection.getTransaction(signature, {
    maxSupportedTransactionVersion: 1,
  });

  return true;
};
