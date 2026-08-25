import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import pluginSecurity from "eslint-plugin-security";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // SAST baseline: eslint-plugin-security recommended (tudo "warn" — não bloqueia).
  // Pega ReDoS, child_process, fs/require não-literal, eval.
  pluginSecurity.configs.recommended,
  {
    rules: {
      // ReDoS em regex exposta ao usuário é vetor real de DoS — bloqueia.
      "security/detect-unsafe-regex": "error",
      // Falso-positivo massivo em TS (qualquer `obj[key]`) — desliga.
      "security/detect-object-injection": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", ".netlify/**"]),
]);

export default eslintConfig;
