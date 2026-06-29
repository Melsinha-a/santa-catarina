import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6A11CB, #2575FC, #00C9A7)",
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
          src="/sc.jpg"
          alt="Santa Catarina"
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
             Turismo em Santa Catarina
          </h1>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
            }}
          >
            Santa Catarina é um dos estados mais encantadores do sul do Brasil,
            conhecido por sua grande diversidade natural e cultural. O estado
            reúne belas praias, serras, cidades históricas e uma gastronomia
            rica, influenciada por diferentes povos como açorianos, alemães e
            italianos.
          </p>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
            }}
          >
            Com um dos litorais mais procurados do país, Santa Catarina atrai
            turistas durante o ano inteiro, oferecendo destinos famosos como
            Florianópolis, Balneário Camboriú, Bombinhas e Balneário Piçarras.
            Além disso, suas regiões serranas proporcionam paisagens únicas e
            clima agradável, especialmente durante o inverno.
          </p>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
            }}
          >
            Além das belezas naturais, o estado se destaca pela organização,
            qualidade de vida e forte tradição cultural, tornando-se um dos
            principais destinos turísticos do Brasil.
          </p>

          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#FFE082",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#C0392B",
                marginBottom: "15px",
                fontSize: "28px",
              }}
            >
               Explore nosso conteúdo
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <Link
                href="/praias"
                style={{
                  backgroundColor: "#2196F3",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                 Praias
              </Link>

              <Link
                href="/gastronomia"
                style={{
                  backgroundColor: "#FF9800",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                 Gastronomia
              </Link>

              <Link
                href="/pontos-turisticos"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                 Pontos Turísticos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}