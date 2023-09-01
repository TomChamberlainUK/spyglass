import { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "tests/components/{{pascalCase name}}.test.tsx",
        templateFile: "templates/componentTest.hbs",
      },
      {
        type: "add",
        path: "src/styles/{{pascalCase name}}.module.scss",
        templateFile: "templates/componentStyle.hbs"
      },
      {
        type: "append",
        path: "src/index.tsx",
        pattern: /(\/\/ component exports)/g,
        template: "export { default as {{pascalCase name}} } from './components/{{pascalCase name}}';",
      },
    ],
  });
}
