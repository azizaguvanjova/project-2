import React from "react"
import Accordion from "./Accordion"

const fetchData = [
    {
        id: 1,
        title: 'Akordeon nasıl çalişir?',
        content: 'Akordeon, belirli bır alanı genişletip daraltarak içerik gostermeye yarayan bir bileşendir '
    },
    {
        id: 2,
        title: 'useState nedir?',
        content: 'useState, React bileşenlerınde durum yonetımı için kullanılan bir hooktir'
    },
    {
        id: 3,
        title: '&& operatörü nedır?',
        content: '&&, bir JavaScript operaörüdür ve koşulların dogru olması durumunda bır deger döndürmek için kullanılır'
    }
]

const App = () => {

  return (
    <div className="">
    <h1 className="text-center text-lg font-bold">Project 2: SSS/Accordion</h1>
    <div className="border-[2px] bg-blue-700 w-[500px] h-[400px] mx-[550px] my-8">
        <h3 className="text-center font-bold my-4 mx-3 text-white">Sıkça Sorulan Sorular</h3>
    <div className="max-w-md mx-auto mt-10 ">
{fetchData.map((data,id) => (
    <Accordion key={id} title={data.title} content={data.content} />
))}
    </div>
    </div>
    </div>
  )
}
export default App