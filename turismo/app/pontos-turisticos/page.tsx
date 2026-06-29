import Link from "next/link";
import Image from "next/image";

export default function PontosTuristicos() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4facfe, #00f2fe, #43e97b)",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          backgroundColor: "#FFF8E7",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
      >
        <Image
          src="/ponte.jpg"
          alt="Ponte Hercílio Luz"
          width={900}
          height={450}
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <div style={{ padding: "35px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "#D35400",
              fontSize: "42px",
              marginBottom: "25px",
            }}
          >
             Pontos Turísticos
          </h1>

          <p
            style={{
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
            }}
          >
            Santa Catarina possui uma grande variedade de pontos turísticos que
            encantam visitantes de todo o Brasil e do mundo. O estado combina
            natureza, história e diversão, oferecendo atrações para todos os gostos.
          </p>

          <p
            style={{
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
            }}
          >
            Entre os destinos mais famosos está a Ponte Hercílio Luz, em
            Florianópolis, um dos principais cartões-postais do estado e símbolo
            histórico da capital. Outro destaque é o Beto Carrero World, localizado
            em Penha, considerado o maior parque temático da América Latina.
          </p>

          <p
            style={{
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
            }}
          >
            Para os amantes da natureza, a Serra do Rio do Rastro impressiona com
            suas curvas e paisagens de tirar o fôlego. Já cidades como Blumenau e
            Joinville oferecem forte influência cultural europeia.
          </p>

          <p
            style={{
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
            }}
          >
            Esses e muitos outros lugares fazem de Santa Catarina um destino
            completo, unindo aventura, cultura e paisagens inesquecíveis.
          </p>

          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#FFD166",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#C0392B", marginBottom: "10px" }}>
               Destaques de Santa Catarina
            </h2>

            <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.8" }}>
               Ponte Hercílio Luz <br />
               Beto Carrero World <br />
               Serra do Rio do Rastro <br />
               Blumenau <br />
               Joinville
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "35px" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "14px 30px",
                backgroundColor: "#E63946",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Voltar para a Página Inicial
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}