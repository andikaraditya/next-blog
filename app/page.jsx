import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data/db.json";

export default function Home() {
  return (
    <main className="min-h-[80vh]">
      <div className="flex flex-col items-center max-[1100px]:w-[90%] w-[1100px] m-auto gap-[4rem] ">
          {data.map((el, index) => {
              return (
                <Card 
                post={el}
                key={index}
                />
              )
          })}
          <p className="text-5xl mb-7 text-slate-600">end of page</p>
      </div>
    </main>
  )
}
