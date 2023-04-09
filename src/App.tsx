import { Header } from "./components/Header/Header"
import style from "./App.module.css"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/post/Post"
function App() {
  const post = [
    {
      id:1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rockteseat'
      },
      content:[
        {type: 'paragraph', content:'Fala galera esse portifólio do Deviego está muito massa'},
        {type: 'paragraph', content:'Pra deixar um feedback, põe a parte de comunicação direta com você'},
        {type:'link', content: 'jane.design'}
      ],
      publishedAt: new Date('2023-02-20 20:00:00')
    },
    {
      id:2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rockteseat'
      },
      content:[
        {type: 'paragraph', content:'Fala galera esse portifólio do Deviego está muito massa'},
        {type: 'paragraph', content:'Pra deixar um feedback, põe a parte de comunicação direta com você'},
        {type:'link', content: 'jane.design'}
      ],
      publishedAt: new Date('2023-02-21 21:00:00')
    },

  ]
  return(
    <>  
    <Header/>
    <div className={style.wrapper} >
    <Sidebar />
    <main>
      {post.map(post => {
        return <Post
          key={post.id}
          author={post.author}
          content= {post.content}
          publishedAt={post.publishedAt}
        />
      })}
     
    </main>
    </div>
    
    </>
  )
}

export default App
