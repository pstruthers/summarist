import Review from "./Review";

export default function Reviews() {
  return (
    <div className="max-w-[1070px] w-full mx-auto px-6">
      <div className="py-10 w-full">
        <div className="text-[32px] text-[#032b41] text-center font-bold mb-8 max-md:text-[24px]">What our members say</div>
        <div className="max-w-[600px] mx-auto">
          <Review
            name="Hanna M."
            stars={5}
            body={<>This app has been a <b>game-changer</b> for me! It's saved me so
              much time and effort in reading and comprehending books. Highly
              recommend it to all book lovers.</>}
          />
          <Review
            name="David B."
            stars={5}
            body={<>I love this app! It provides 
              <b> concise and accurate summaries</b> of books in a way that is
              easy to understand. It's also very user-friendly and intuitive.</>}
          />
          <Review
            name="Nathan S."
            stars={5}
            body={<>This app is a great way to get the main takeaways from a book
              without having to read the entire thing.
              <b> The summaries are well-written and informative. </b>
              Definitely worth downloading.</>}
          />
          <Review
            name="Ryan R."
            stars={5}
            body={<>If you're a busy person who
              <b> loves reading but doesn't have the time</b> to read every
              book in full, this app is for you! The summaries are thorough
              and provide a great overview of the book's content.</>}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-[#2bd97c] text-[#032b41] w-full h-10 rounded-sm text-[16px] transition duration-200 flex items-center justify-center min-w-[180px] max-w-[300px] hover:enabled:bg-[#20ba68] disabled:cursor-not-allowed disabled:opacity-65 active:translate-y-[1px] cursor-pointer">Login</button>
        </div>
      </div>
    </div>
  )
}