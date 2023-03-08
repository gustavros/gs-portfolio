import HidePagamentosImage from "../assets/hide-pagamentos.png";
import GalorysRpImage from "../assets/galorys-rp.png";

import DoctorCareImage from "../assets/doctor-care.png";
import GustavosBlogImage from "../assets/gustavos-blog.png";
import MoMoviesImage from "../assets/mo-movies.png";
import MaratonaSlack from "../assets/maratona-slack.png";

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
  repository?: string;
}

export const projects: ProjectProps = {
  professional: [
    {
      id: 1,
      title: "Hide Pagamentos",
      description: "Landing page para a Hide Pagamentos.",
      image: HidePagamentosImage.src,
      link: "http://sapagamentos.com/",
    },
    {
      id: 2,
      title: "Galorys RP",
      description: "Landing page para a Galorys RP.",
      image: GalorysRpImage.src,
      link: "https://galorys.com/games/grandtheftauto",
    },
  ],
  personal: [
    {
      id: 1,
      title: "Mo' Movies",
      description:
        "Sistema para visualização de filmes e séries, com base na API do The Movie Database.",
      image: MoMoviesImage.src,
      link: "https://mo-movies.vercel.app/",
      repository: "https://github.com/gustavros/mo-movies",
    },

    {
      id: 3,
      title: "Doctor Care",
      description: "Landing page para a Doctor Care.",
      image: DoctorCareImage.src,
      link: "https://gustavros.github.io/doctorcare/",
      repository: "https://github.com/gustavros/doctorcare",
    },
    {
      id: 4,
      title: "Gustavo's Blog",
      description:
        "📃 Gustavo's Blog é um projeto de um diário online que permite administradores fazer postagens no mesmo.",
      image: GustavosBlogImage.src,
      link: "http://gustavros-blog-web.vercel.app/",
      repository: "https://github.com/gustavros/gustavros-blog-web",
    },

    {
      id: 5,
      title: "Maratona Slack",
      description:
        "Maratona Slack é um site para se inscrever na maratona Slack",
      image: MaratonaSlack.src,
      link: "https://maratona-slack.vercel.app/",
      repository: "https://github.com/gustavros/maratona-slack",
    },
  ],
};
