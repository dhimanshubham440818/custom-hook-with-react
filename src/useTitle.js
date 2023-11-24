// this is is custom hook for changing the route title 
export default function useTitle( title ) {  
    document.title= !title ? "React App" : title;
}