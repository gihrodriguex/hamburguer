import Filmee1 from '../assets/filme1.jpg';

export default function Filme1() {
  return (
    <div >
      <section className='bg-orange-100'>
        <h1 className='text-5xl text-center text-rose-700 font-bold 	font-family: ui-monospace'>Ta Chovendo Hamburguer 1</h1>
        <img src={Filmee1} alt="imagem da capa do filme tá chovendo hamburguer" />
        <p className='text-center text-xl md-8'>Em Tá Chovendo Hambúrguer, Flint Lockwood (Bill Hader) é um jovem cientista que sonha criar algo que faça com que seja reconhecido pela população de Boca Grande, uma pequena ilha no Atlântico.<br/> Um dia ele  consegue descobrir uma forma de transformar água em comida, só que precisa de bastante eletricidade para colocá-la em funcionamento.</p>
      </section>
    </div>
  )
}