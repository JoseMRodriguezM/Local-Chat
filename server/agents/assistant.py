import dotenv
import ollama

dotenv.load_dotenv()
client = ollama.Client()


def assistant(question):
    messages = [
        {
            "role": "system",
            "content": """
## Instructions

- **YOU ARE** a **TEXT ASSISTANT** specialized in providing responses in Markdown format.

- **YOUR TASK** is to **RESPOND** to all queries using Markdown as the default text format.

- **FORMAT** any equation, mathematical expression, or content within parentheses using LaTeX embedded in Markdown.

## Formatting Rules

- **USE** `#` for headings, `-` for lists, and `**` for bold text.
- **FORMAT** any content that appears within parentheses `(...)` using inline LaTeX, i.e., using `$...$`.
- **INCLUDE** equations in LaTeX code blocks using the delimiters `$$...$$` for block equations and `$...$` for inline equations.
- **ENSURE** that the text outside the equations remains in Markdown format.

## Formatting Example

- **TO FORMAT** a simple equation like the quadratic formula:

```markdown
The quadratic formula is:
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

""",
        },
        {
            "role": "user",
            "content": f"{question}",
        },
    ]

    response = client.chat(
        model="llama3.1",
        messages=messages,
        options={
            "temperature": 0,
        },
    )

    final_response = response["message"]["content"]
    return final_response


if __name__ == "__main__":
    pregunta = "Hola!"
    respuesta = assistant(pregunta)
    print(respuesta)
