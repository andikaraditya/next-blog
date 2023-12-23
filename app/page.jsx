import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  const posts = ["","","","","",""]
  return (
    <main>
      <Header 
        title="Lightstation"
      />
      <div className="flex flex-col items-center w-[700px] m-auto gap-16">
          {posts.map((el, index) => {
              return (
                <Card 
                key={index}
                />
              )
          })}
      </div>
    </main>
  )
}
