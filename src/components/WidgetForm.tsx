import { CloseButton } from "./CloseButton";
import { useState } from "react";

import bugImageUrl from './assets/bug.svg';
import ideaImageUrl from './assets/idea.svg';
import otherImageUrl from './assets/other.svg';


const feedbackTypes ={
  BUG:{
    title:'Problema',
    image: {
      source: bugImageUrl,
      alt:'Imagem de um inseto'
    },
  },
  IDEA:{
    title:'Ideia',
    image: {
      source: ideaImageUrl,
      alt:'Imagem de um lâmpada'
    },
  },
  OTHER:{
    title:'Outro',
    image: {
      source: otherImageUrl,
      alt:'Imagem de uma nuvem de pensamento'
    },
  },
};

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm () {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

       <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>  
        <CloseButton />
       </header>

       <div className="flex py-8 gap-2 w-full">
          { Object.entries(feedbackTypes).map(([key, value]) => { 
            return(
              <button
              key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:boder-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => setFeedbackType(key)}
                type="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })  }
       </div>
       
       <footer className="text-xs text-neutral-400" >
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://github.com/biamesquitap/">Bia M</a>
       </footer>

       </div>
  );
}