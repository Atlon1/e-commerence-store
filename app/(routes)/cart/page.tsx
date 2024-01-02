"use client";

import {useState, useEffect} from 'react';
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";


const Page = () => {

    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart()


    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null;
    }


    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 py-16 sm:px-6 lg:px-8'>
                    <h1 className='text=3xl font-bold text-black'>
                        Shopping Cart
                    </h1>
                    <div className='m-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                        <div className='lg:col-span-7'>
                            {cart.items.length === 0 && <p className='text-neutral-500'>No items added to cart</p>}
                            <ul>
                                {cart.items.map((items)=> (
                                    <Cartitem
                                    key={items.id}
                                    data={items}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Page;