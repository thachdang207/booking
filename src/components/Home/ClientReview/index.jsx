import React from "react";
import ClientReviewCard from "./ClientReviewCard";
import Title from "../../Global/Title";

function ClientReview() {
    return (
        <section className="reviews px-5 xl:px-48">
            <Title title="What people think about us" />
            <br />
            <div className="relative flex flex-col md:flex-row">
                <ClientReviewCard
                    avatar="//vnn-imgs-f.vgcloud.vn/2020/12/20/16/con-duong-ong-putin-tro-thanh-tong-thong-lien-bang-nga.jpg"
                    name="Vladimir Putin"
                    location="Moscow - Russia"
                    rating={5}
                    review="Lorem ipsum, dolor sit amet consectetur adipisicing
                            consectetur adipisicing elit. Dolor, explicabo
                            cupiditate. Alias, sequi"
                />

                <ClientReviewCard
                    avatar="//image.thanhnien.vn/660/uploaded/taynguyen/2020_11_19/kim2bjong-un2bgettyimages-1035459584_ckhe.jpg"
                    name="Kim Jong Un"
                    location="North Korea"
                    rating={4}
                    review="Lorem ipsum, dolor sit amet consectetur adipisicing
                            consectetur adipisicing elit. Dolor, explicabo
                            cupiditate. Alias, sequiLorem ipsum, dolor sit amet consectetur adipisicing
                            consectetur adipisicing elit. Dolor, explicabo
                            cupiditate. Alias, sequi"
                />
                <ClientReviewCard
                    avatar="//upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/200px-Donald_Trump_official_portrait.jpg"
                    name="Donald Trump"
                    location="Wasington D.C - United States"
                    rating={5}
                    review="Lorem ipsum, dolor sit amet consectetur adipisicing
                            consectetur adipisicing elit. Dolor, explicabo
                            cupiditate. Alias, sequi"
                />  
            </div>
        </section>
    );
}

export default ClientReview;
