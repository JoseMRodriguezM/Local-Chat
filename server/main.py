from flask import Flask, jsonify, request
from flask_cors import CORS
from agents.assistant import assistant

app = Flask(__name__)
CORS(app)

# Almacenamiento en memoria de las conversaciones
conversations = []


@app.route("/", methods=["POST"])
def chat():
    question = request.form["question"]
    assistantResponse = assistant(question)

    # Guardar la conversación
    conversation = {"question": question, "response": assistantResponse}
    conversations.append(conversation)

    return jsonify({"result": assistantResponse, "conversations": conversations})


@app.route("/history", methods=["GET"])
def get_history():
    return jsonify({"conversations": conversations})


if __name__ == "__main__":
    app.run(debug=True, port=8080)
