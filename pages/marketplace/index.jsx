import React, { useState } from "react";
import Image from "next/image";
import Collection_items from "../../components/collectrions/Collection_items";

const mockNFTs = [
  {
    id: 1,
    image: "https://example.com/nft1.jpg",
    price: "2 ETH",
    seller: "0xABC123...DEF456",
  },
  {
    id: 2,
    image: "https://example.com/nft2.jpg",
    price: "3.5 ETH",
    seller: "0xGHI789...JKL012",
  },
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [nfts, setNfts] = useState(mockNFTs);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNFTs = nfts.filter((nft) =>
    nft.seller.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative py-20">
      <div className="container">
        <h1 className="font-display text-jacarta-700 py-10 text-center text-4xl font-medium dark:text-white">
          Marketplace
        </h1>
        <div className="mx-auto max-w-[24rem] mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
            placeholder="Search by seller address"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredNFTs.map((nft) => (
            <div key={nft.id} className="border rounded-lg p-4 dark:bg-jacarta-700 border-jacarta-100 dark:border-jacarta-600">
              <img src={nft.image} alt={`NFT ${nft.id}`} className="w-full h-64 object-cover rounded-lg mb-4" />
              <div className="text-lg font-semibold dark:text-white">{nft.price}</div>
              <div className="text-sm text-gray-500 dark:text-gray-300">
                {nft.seller}
              </div>
            </div>
          ))}
        </div>
        <Collection_items />
      </div>
    </section>
  );
}
