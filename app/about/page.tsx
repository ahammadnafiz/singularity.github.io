import PostFooter from "@/app/components/PostFooter"

export default function About() {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-jetbrains-mono">About</h2>
        <div className="space-y-4 text-base">
          <p>
            আমি আহাম্মদ নাফিজ। Singularity 2.0 ব্লগে আমি পাইথন, মেশিন লার্নিং, এআই
            নিয়ে লিখি।
          </p>
          <p>
            বর্তমানে আমি মেশিন লার্নিং, ডিপ লার্নিং, এবং এআই সিস্টেমের নৈতিকতা নিয়ে কাজ করছি। আমার লক্ষ্য হল প্রযুক্তির জটিল বিষয়গুলোকে
            সহজভাবে উপস্থাপন করা।
          </p>
        </div>
      </div>
      <PostFooter />
    </div>
  )
}