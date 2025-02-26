import Link from "next/link";
import Rectangle from "../components/Rectangle";
import Container from "../components/Container";
import Chess from "../components/Chess";

export default function Home() {
  const str = "CHESS";
  const rows = 3;
  const cols = 3;


  const charList = Array.from(str).map(char => (
    <Rectangle text={char}></Rectangle>
  ));

  return (
    <>
      <Container items={charList}></Container>
      <Link href="/page2"> Ir a pagina 2</Link>
      <Chess rows={rows} cols={cols}></Chess>
    </>
  );
}
