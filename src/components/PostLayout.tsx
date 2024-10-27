'use client';

import { getAuthor } from "@/lib/authors";
import { getTag } from "@/lib/tags";
import { MDXRemote } from "next-mdx-remote";
import Layout from "./Layout";
import JsonLdMeta from "./meta/JsonLdMeta";


import type { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import type { FC } from "react";
import {WixMediaImage} from "@/components/Image/WixMediaImage";

export interface PostLayoutProps {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  thumbnail: string;
  source: MDXRemoteSerializeResult;
}

const PostLayout: FC<PostLayoutProps> = ({ title, date, slug, author, thumbnail, tags, description = "", source }) => {
  const keywords = tags.map((it) => getTag(it)?.name).filter(Boolean);
  const authorName = getAuthor(author)?.name;
  console.log("source", source)
  return (
    <Layout>
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <div className="relative">
        <div className="w-full h-[400px] relative">
          <WixMediaImage
              media="/images/mission.jpg"
              alt={"mession"}
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
          />
        </div>
        <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20 text-center">
          <h1 className="py-8 font-site">{title}</h1>
          <p className="py-6 max-w-3xl text-lg mx-auto">
            {description}
          </p>
          <div className="relative h-[400px]">
            <WixMediaImage
                media={thumbnail}
                alt={title}
                sizes="100vw"
                objectFit="contain"
            />
          </div>
          {<MDXRemote {...source} />}
        </div>
      </div>

{/*
      <div className="block max-w-[36rem] w-full my-0 mx-auto py-0 px-6 box-border z-0 md:flex md:flex-col">
        <article className="flex-[1_0_auto]">
          <header>
            <h1 className="mb-2 text-4xl">{title}</h1>
            <div>
              <div className="inline-block mr-2">
                <Date date={date} />
              </div>
              <div className="inline-block mr-2">
                <Author author={getAuthor(author)} />
              </div>
            </div>
          </header>
          <div className={styles.content}>{<MDXRemote {...source} />}</div>
          <ul className="text-right mt-7 p-0">
            {tags.map((it, i) => (
              <li key={i} className="inline-block ml-2">
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul>
        </article>
        <footer>
          <div className="mt-12 text-center">
            <SocialList />
          </div>
          <Copyright />
        </footer>
      </div>
*/}
    </Layout>
  );
};

export default PostLayout;
