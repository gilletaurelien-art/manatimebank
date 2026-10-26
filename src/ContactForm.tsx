import { useState } from "react";

// Formulaire de contact du footer — vers l'Alliance MANA (association).
// Démo : l'envoi est simulé (aucun backend). En prod : API + rate-limit
// anti-spam. Aucune donnée ne quitte le navigateur en l'état.

interface ContactState {
  nom: string;
  courriel: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactState>({
    nom: "",
    courriel: "",
    message: "",
  });
  const [envoye, setEnvoye] = useState(false);

  const valide =
    form.nom.trim() && form.courriel.includes("@") && form.message.trim();

  const envoyer = () => {
    if (!valide) return;
    try {
      const cle = "manatimebank-contact-demo";
      const existant = JSON.parse(localStorage.getItem(cle) ?? "[]");
      existant.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem(cle, JSON.stringify(existant));
    } catch {
      // démo : échec de stockage non bloquant
    }
    setEnvoye(true);
  };

  const champ = (k: keyof ContactState) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value }),
  });

  if (envoye) {
    return (
      <div className="contact-form" role="status">
        <p className="contact-merci">
          Merci, votre message a bien été enregistré. L'Alliance MANA
          répond à <strong>{form.courriel}</strong> dès que possible.
        </p>
        <button
          type="button"
          className="btn btn-clair-ghost"
          onClick={() => {
            setEnvoye(false);
            setForm({ nom: "", courriel: "", message: "" });
          }}
        >
          Écrire un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        envoyer();
      }}
    >
      <p className="apercu-label">Écrire à MANA TIME BANK</p>
      <div className="contact-grid">
        <div className="champ">
          <label htmlFor="contact-nom">Nom / organisation *</label>
          <input id="contact-nom" type="text" autoComplete="organization" {...champ("nom")} />
        </div>
        <div className="champ">
          <label htmlFor="contact-courriel">Courriel *</label>
          <input
            id="contact-courriel"
            type="email"
            autoComplete="email"
            placeholder="vous@exemple.fr"
            {...champ("courriel")}
          />
        </div>
      </div>
      <div className="champ">
        <label htmlFor="contact-message">Message *</label>
        <textarea id="contact-message" rows={4} {...champ("message")} />
      </div>
      <div className="est-actions">
        <button type="submit" className="btn btn-clair" disabled={!valide}>
          Envoyer
        </button>
      </div>
      <p className="contact-note">
        Démo : l'envoi est simulé localement tant que le backend n'existe pas
        (en prod : auth + API + rate-limit). Aucune donnée n'est revendue ;
        vous pouvez demander la suppression à tout moment.
      </p>
    </form>
  );
}
