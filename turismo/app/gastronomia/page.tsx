import Link from "next/link";
import Image from "next/image";

export default function Gastronomia() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #00B4DB, #0083B0, #00C9A7)",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          backgroundColor: "#FFF8E7",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <Image
          src="/comida.jpg"
          alt="Comida típica catarinense"
          width={850}
          height={450}
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <div style={{ padding: "35px" }}>
          <h1
            style={{
              color: "#D35400",
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
             Gastronomia Catarinense
          </h1>

          <p
            style={{
              color: "#444",
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            A culinária catarinense é reconhecida pela variedade de frutos do
            mar, como ostras, camarões, mariscos e peixes frescos, além de
            receitas tradicionais herdadas das culturas açoriana, alemã e
            italiana.
          </p>

          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#FFD166",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h2 style={{ color: "#C0392B" }}> Pratos Típicos</h2>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                fontSize: "18px",
                color: "#333",
                lineHeight: "2",
              }}
            >
              <li> Ostras frescas</li>
              <li> Sequência de camarão</li>
              <li> Tainha assada</li>
              <li> Pirão</li>
              <li> Cuca alemã</li>
            </ul>
          </div>

          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: "35px",
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
    </main>
  );
}