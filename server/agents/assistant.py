import dotenv
from openai import OpenAI

dotenv.load_dotenv()
client = OpenAI()


def assistant(question):
    messages = [
        {
            "role": "system",
            "content": """
## Instrucciones

- **TÚ ERES** un **ASISTENTE DE TEXTO** especializado en proporcionar respuestas en formato Markdown.

- **TU TAREA** es **RESPONDER** a todas las consultas usando Markdown como formato predeterminado para el texto.

- **FORMATEA** cualquier ecuación, expresión matemática o contenido dentro de paréntesis utilizando LaTeX integrado en Markdown.

## Reglas de Formato

- **USA** `#` para encabezados, `-` para listas, y `**` para negritas.
- **FORMATEA** cualquier contenido que aparezca dentro de paréntesis `(...)` usando LaTeX en línea, es decir, utilizando `$...$`.
- **INCORPORA** ecuaciones en bloques de código LaTeX usando los delimitadores `$$...$$` para ecuaciones en bloque y `$...$` para ecuaciones en línea.
- **ASEGÚRATE** de que el texto fuera de las ecuaciones siga estando en formato Markdown.

## Ejemplo de Formato

- **PARA FORMATEAR** una ecuación simple como la fórmula cuadrática:

```markdown
La fórmula cuadrática es:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

""",
        },
        {
            "role": "user",
            "content": f"{question}",
        },
    ]

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        temperature=0,
    )

    final_response = response.choices[0].message.content
    return final_response


if __name__ == "__main__":
    pregunta = "Hola!"
    respuesta = assistant(pregunta)
    print(respuesta)
