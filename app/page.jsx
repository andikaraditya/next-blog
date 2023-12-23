import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data/db.json";

export default function Home() {
  return (
    <main>
      <Header 
        title="Lightstation"
      />
      <div className="flex flex-col items-center w-[700px] m-auto gap-[5rem]">
          {data.map((el, index) => {
              return (
                <Card 
                post={el}
                key={index}
                />
              )
          })}
      </div>
    </main>
  )
}
