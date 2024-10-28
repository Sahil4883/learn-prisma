import prisma from "@/lib/db";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await prisma.post.findUnique({
    where: { slug: (await params).slug },
  });
  console.log(post);

  return (
    <div className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
