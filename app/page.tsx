import { getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { json } from "stream/consumers";
import Contact from "./components/contact/page";
import Content from "./components/contents/page";
import NewArrival from "./components/contents/newArrival";
import ShopCollection from "./components/contents/shopCollection";
import BestSeller from "./components/contents/bestSeller";
import Promotion from "./components/contents/promotion";
import Service from "./components/contents/service";
import NewFeed from "./components/contents/newsFeed";

export default async function Home() {
  const session = await getSession();
  return (
    <main>
        <Content/>
        <NewArrival/>
        <ShopCollection/>
        <BestSeller/>
        <Promotion/>
        <Service/>
        <NewFeed/>
    </main>
  );
}
