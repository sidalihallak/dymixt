import Layout from "@/components/Layout";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";
import PostList from "@/components/PostList";
import config from "@/lib/config";
import {countPosts, listPostContent} from "@/lib/posts";
import {listTags} from "@/lib/tags";

import type {PostContent} from "@/lib/posts";
import type {TagContent} from "@/lib/tags";
import {WixMediaImage} from "@/components/Image/WixMediaImage";

interface PostsProps {
    posts: PostContent[];
    tags: TagContent[];
    pagination: {
        current: number;
        pages: number;
    };
}

const getPosts = async (): Promise<PostsProps> => {
    const posts = listPostContent(1, config.posts_per_page);
    const tags = listTags();
    const pagination = {
        current: 1,
        pages: Math.ceil(countPosts() / config.posts_per_page),
    };
    return {
        posts,
        tags,
        pagination,
    };
};

const Posts = async () => {
    const {posts, tags, pagination} = await getPosts();

    return (
        <Layout>
            <div className="relative">
                <div className="w-full h-[400px] relative">
                    <WixMediaImage
                        media="/images/mission.jpg"
                        alt="news"
                        sizes="100vw"
                        objectFit="cover"
                        disableZoom={true}
                    />
                </div>
                <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
                    <h1
                        className="text-center py-8 text-blue-site font-site"
                    >
                        Actualités
                    </h1>
                    <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
                        Lisez les dernières nouvelles et restez au courant de notre organisation, de nos projets, de nos
                        événements et de l’impact que nous avons.
                    </p>

                    <PostList posts={posts} tags={tags} pagination={pagination}/>
                </div>
            </div>
        </Layout>
    );
};

export default Posts;
