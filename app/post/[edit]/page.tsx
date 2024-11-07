import prisma from "@/lib/db";
import { editPost } from "@/actions/actions";
export default async function EditPage({
    params,
  }: {
    params: Promise<{ edit: string }>;
  }) {
    const post = await prisma.post.findUnique({
        where: { id: (await params).edit },
      });
      console.log(post);
return(
    <div className="flex flex-col items-center gap-y-5 pt-24 text-center">
        <h1 className="text-3xl font-semibold">{post?.title}</h1>
        <p>{post?.content}</p>
    </div>
)
}