import Fade from "react-reveal/Fade";
import { useSearchParams } from "react-router-dom";
import NavAdmin from "./../../components/ui/NavAdmin";
import useCandidatos from "./../../hooks/useCandidatos";
import { useParams } from "react-router-dom";
import CardCandidato from "./../../components/ui/CardCandidato";
import Spin from "../../components/spinners/Spin";

const Candidatos = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { documentos, loading } = useCandidatos(id);
  return (
    <div>
      <NavAdmin />
      <div className="mt-12 w-10/12 container mx-auto mb-12">
        <h1 className="text-center text-blue-deep font-semibold text-2xl">
          Candidatos <span className="text-primary-jade">disponibles</span>
        </h1>
        <Fade left>
          <div className="mt-12 grid grid-cols-1  gap-4">
            {loading ? (
              <Spin />
            ) : documentos.length === 0 ? (
              <p className="font-semibold text-center mx-auto">
                Aun no hay nada :C
              </p>
            ) : (
              documentos.map((candidato) => (
                <CardCandidato key={candidato.id} candidato={candidato} />
              ))
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Candidatos;
