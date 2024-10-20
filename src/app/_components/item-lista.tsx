interface Prop {
 
  text: string
}

export default function ItemLista({ text }: Prop) {
  return (
    <li className="ml-4">{text}</li>
  );
}
