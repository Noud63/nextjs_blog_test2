
import Image from 'next/image';
import PostCommentForm from './PostCommentForm';

const PostComment = ({post}) => {

 return (
    <div className="w-full flex items-center gap-2">
      <div className="w-[45px]">
        <Image
          src="/images/defaultAvatar.png"
          alt=""
          width={45}
          height={45}
          className="rounded-full w-[45px] h-[45px]"
        />
      </div>
      <PostCommentForm post={post}/>
    </div>
  );
}

export default PostComment
