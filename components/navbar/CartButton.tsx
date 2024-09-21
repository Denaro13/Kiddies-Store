import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LiaShoppingBasketSolid } from "react-icons/lia";

const CartButton = async () => {
  const numOfItemsInCart = 9;

  return (
    <Button
      size="icon"
      asChild
      variant="outline"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LiaShoppingBasketSolid />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numOfItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
