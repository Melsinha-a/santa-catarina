import Link from "next/link";
import Image from "next/image";

export default function Praias() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #00B4DB, #36D1DC, #5B86E5)",
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
          src="/praia.jpg"
          alt="Praia"
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
              color: "#0066CC",
              fontSize: "42px",
              marginBottom: "25px",
            }}
          >
             Praias de Santa Catarina
          </h1>

          <p
            style={{
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
            }}
          >
            As praias de Santa Catarina estão entre as mais bonitas e visitadas
            do Brasil. Com mais de 500 km de litoral, o estado oferece uma
            grande variedade de paisagens, que vão desde praias tranquilas e
            preservadas até destinos mais movimentados e turísticos.
          </p>

          <p
            style={{
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
              marginTop: "20px",
            }}
          >
            Entre as mais conhecidas estão a Praia do Rosa, famosa por sua
            natureza e pelo turismo ecológico, Jurerê Internacional, conhecida
            pela infraestrutura e vida noturna, e a Guarda do Embaú, muito
            procurada por surfistas e amantes da natureza.
          </p>

          <p
            style={{
              lineHeight: "1.8",
              textAlign: "justify",
              fontSize: "18px",
              color: "#444",
              marginTop: "20px",
            }}
          >
            Além da beleza natural, muitas praias catarinenses possuem águas
            limpas, dunas, trilhas e mirantes que proporcionam experiências
            únicas aos visitantes. Por isso, o litoral de Santa Catarina é
            considerado um dos destinos mais completos do Brasil para quem busca
            lazer, descanso e contato com a natureza.
          </p>

          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#A8E6CF",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#00695C",
                marginBottom: "10px",
              }}
            >
               Praias Mais Conhecidas
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#333",
                lineHeight: "1.8",
              }}
            >
               Praia do Rosa <br />
               Jurerê Internacional <br />
               Guarda do Embaú <br />
               Praia da Joaquina <br />
               Praia de Bombinhas
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "35px" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "14px 30px",
                backgroundColor: "#0077B6",
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