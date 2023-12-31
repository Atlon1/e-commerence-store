import React from 'react';
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";


export const revalidate = 0

const HomePage = async () => {
    const product = await getProducts({ isFeatured: true });
    const billboard = await getBillboards('f01328b4-796f-4a60-a965-b3062fdd3d77')


    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard}/>
                <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                    <ProductList title='Featured Products' items={product}/>
                </div>
            </div>
        </Container>
    );
};

export default HomePage;