import Link from 'next/link';
import { notFound } from 'next/navigation';

import getFormattedDate from '@/lib/getFormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';

interface Props {
  params: {
    postId: string;
  };
}

export const generateMetadata = (props: Props) => {
  const posts = getSortedPostsData();
  const { postId } = props.params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
};

const Post = async (props: Props) => {
  const posts = getSortedPostsData();
  const { postId } = props.params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const publicationDate = getFormattedDate(date);

  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
      <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
      <p className='mt-0'>{publicationDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href='/'>← Back to home</Link>
        </p>
      </article>
    </main>
  );
};

export default Post;

export const generateStaticParams = () => {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
};
