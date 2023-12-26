import React from 'react';
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboards from "@/actions/get-billboards";

export const revalidate = 0

const HomePage = async () => {

    const billboard = await getBillboards('f01328b4-796f-4a60-a965-b3062fdd3d77')


    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard}/>
            </div>
        </Container>
    );
};

export default HomePage;