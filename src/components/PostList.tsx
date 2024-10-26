
import type {PostContent} from "@/lib/posts";
import type {TagContent} from "@/lib/tags";
import type {FC} from "react";
import {WixMediaImage} from "@/components/Image/WixMediaImage";
import {formatDate} from "@/util/date-formatter";

export interface PostListProps {
    posts: PostContent[];
    tags: TagContent[];
    pagination: {
        current: number;
        pages: number;
    };
}

const PostList: FC<PostListProps> = ({posts, tags, pagination}) => {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-7 grid-flow-row mt-10"
        >
            {posts.map((item, i) => (
                <div
                    key={item.slug}
                    className="relative border"
                >
                    <div className="h-[320px] relative">
                        <WixMediaImage
                            media={item.thumbnail}
                            alt={item?.title}
                            objectFit="cover"
                            disableZoom={true}
                        />
                        <span className="bg-blue-site text-white px-6 py-2 absolute bottom-[-20px]">
                  {formatDate(
                      new Date(item.date)
                  )}
                </span>
                    </div>
                    <div className="bg-white relative mt-10 px-8 pb-10">
                        <h2 className="mb-10 font-site">{item?.title}</h2>
                        {/*
                      <p className="text-sm mb-6">{item?.short_description}</p>
                      */}
                        <a
                            href={`/actualites/${item?.slug}`}
                            className="text-purple-site py-6 font-site"
                        >
                            Lire la suite
                        </a>
                    </div>
                </div>
            ))}
        </div>
        /*<div className="flex my-0 mx-auto max-w-[1200px] w-full py-0 px-6">
          <div className="flex flex-col flex-auto">
            <ul className="flex-[1_0_auto]">
              {posts.map((it, i) => (
                <li key={i} className="mb-6">
                  <PostItem post={it} />
                </li>
              ))}
            </ul>
            <Pagination
              current={pagination.current}
              pages={pagination.pages}
              link={{
                href: (page) => (page === 1 ? "/actualites" : "/actualites/page/[page]"),
                as: (page) => (page === 1 ? "" : "/actualites/page/" + page),
              }}
            />
          </div>
        </div>*/
    );
};

export default PostList;
