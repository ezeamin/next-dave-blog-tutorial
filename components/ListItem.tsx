import Link from "next/link"
import getFormattedDate from '@/lib/getFormattedDate';

interface Props {
  post: BlogPost;
}

const ListItem = (props: Props) => {
  const {
    post: { id, title, date },
  } = props;

  const formattedDate = getFormattedDate(date);

  return (
    <li className='mt-4 text-2xl dark:text-white/90'>
      <Link
        className='underline hover:text-black/70 dark:hover:text-white'
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className='text-sm mt-1'>{formattedDate}</p>
    </li>
  );
};

export default ListItem;
