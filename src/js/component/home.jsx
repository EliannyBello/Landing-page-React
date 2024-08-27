import React from "react";
import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid py-2">
				<div className="row">
					<div className="col-md-3">
						<Card imgUrl='https://picsum.photos/id/350/350/250' title='Pérdida de Biodiversidad' description='La caza descontrolada reduce drásticamente la diversidad de especies en la naturaleza. Esto provoca la desaparición de animales clave, afectando negativamente los ecosistemas que dependen de ellos para mantener el equilibrio.' />
					</div>
					<div className="col-md-3">
						<Card imgUrl='https://picsum.photos/id/666/350/250' title='Extinción de Especies' description='La caza indiscriminada ha llevado a muchas especies al borde de la extinción. Animales como el rinoceronte y el elefante están en peligro crítico, lo que representa una pérdida irreparable para la biodiversidad global.' />
					</div>
					<div className="col-md-3">
						<Card imgUrl='https://picsum.photos/id/820/350/250' title='Desbalance en el Ecosistema' description='Eliminar depredadores o presas fundamentales provoca un desequilibrio en la cadena alimentaria. Esto puede llevar a un crecimiento descontrolado de algunas especies, afectando la salud general del ecosistema.' />
					</div>
					<div className="col-md-3">
						<Card imgUrl='https://picsum.photos/id/661/350/250' title='Impacto en las Comunidades Locales' description='La caza ilegal no solo daña la vida silvestre, sino también a las comunidades que dependen de estos animales para su sustento. La pérdida de fauna afecta el ecoturismo y otras actividades económicas sostenibles.' />
					</div>
				</div>
				<div className="row py-2 px-0">
					<Footer />
				</div>
			</div>
		</>
	)


}

export default Home;
