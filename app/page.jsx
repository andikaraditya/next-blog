import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data/db.json";

export default function Home() {
  return (
    <main className="min-h-[80vh]">
      <Header 
        title="Lightstation"
      />
      <div className="flex flex-col items-center w-[700px] m-auto gap-[4rem] ">
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
