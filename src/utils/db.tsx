import HidePagamentosImage from "../assets/hide-pagamentos.png";
import GalorysRpImage from "../assets/galorys-rp.png";

import DoctorCareImage from "../assets/doctor-care.png";
import GustavosBlogImage from "../assets/gustavos-blog.png";
import MoMoviesImage from "../assets/mo-movies.png";
import MaratonaSlack from "../assets/maratona-slack.png";
import FoodExplorerImage from "../assets/food-explorer.png";

export interface ProjectProps {
  professional: Project[];
  personal: Project[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: ProjectProps = {
  professional: [
    {
      id: 1,
      title: "Hide Pagamentos",
      description: "Landing page para a Hide Pagamentos.",
      image: HidePagamentosImage.src,
      link: "google.com.br",
    },
    {
      id: 2,
      title: "Galorys RP",
      description: "Landing page para a Galorys RP.",
      image: GalorysRpImage.src,
      link: "google.com.br",
    },
  ],
  personal: [
    {
      id: 1,
      title: "Mo' Movies",
      description:
        "Sistema para visualização de filmes e séries, com base na API do The Movie Database.",
      image: MoMoviesImage.src,
      link: "google.com.br",
    },
    {
      id: 2,
      title: "Food Explorer",
      description: "Site para compras de pratos de restaurantes.",
      image: FoodExplorerImage.src,
      link: "google.com.br",
    },
    {
      id: 3,
      title: "Doctor Care",
      description: "Landing page para a Doctor Care.",
      image: DoctorCareImage.src,
      link: "google.com.br",
    },
    {
      id: 4,
      title: "Gustavo's Blog",
      description:
        "📃 Gustavo's Blog é um projeto de um diário online que permite administradores fazer postagens no mesmo.",
      image: GustavosBlogImage.src,
      link: "google.com.br",
    },

    {
      id: 5,
      title: "Maratona Slack",
      description: "Site para a Maratona Slack.",
      image: MaratonaSlack.src,
      link: "google.com.br",
    },
  ],
};
