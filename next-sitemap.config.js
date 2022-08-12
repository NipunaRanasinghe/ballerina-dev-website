/** @type {import('next-sitemap').IConfig} */

const config = {
    siteUrl: 'https://ballerina.io/',
    generateRobotsTxt: false, // (optional)
    sitemapSize: 5000,
    generateIndexSitemap: false,
    additionalPaths: async (config) => {
      const result = []

      // using transformation from the current configuration
      // result.push(await config.transform(config, '/additional-page-3'))
      const additionalUrls=['/1.2/learn/generating-ballerina-code-for-protocol-buffer-definitions/',
      '/1.2/learn/keeping-ballerina-up-to-date/',
      '/1.2/learn/calling-java-code-from-ballerina/',
      '/1.2/learn/structuring-ballerina-code/',
      '/1.2/learn/observing-ballerina-code/',
      '/1.2/learn/quick-tour/',
      '/1.2/learn/setting-up-visual-studio-code/run-and-debug/',
      '/1.2/learn/setting-up-visual-studio-code/graphical-editor/',
      '/1.2/learn/setting-up-visual-studio-code/language-intelligence/',
      '/1.2/learn/setting-up-visual-studio-code/',
      '/1.2/learn/deployment/azure-functions/',
      '/1.2/learn/deployment/aws-lambda/',
      '/1.2/learn/using-the-openapi-tools/',
      '/1.2/learn/testing-ballerina-code/testing-quick-start/',
      '/1.2/learn/testing-ballerina-code/mocking/',
      '/1.2/learn/testing-ballerina-code/executing-tests/',
      '/1.2/learn/testing-ballerina-code/writing-tests/',
      '/1.2/learn/installing-ballerina/',
      '/1.2/learn/documenting-ballerina-code/',
      '/1.2/learn/using-the-cli-tools/',
      '/1.2/learn/coding-conventions/expressions/',
      '/1.2/learn/coding-conventions/annotations_documentation_and_comments/',
      '/1.2/learn/coding-conventions/top-level-definitions/',
      '/1.2/learn/coding-conventions/operators_keywords_and_types/',
      '/1.2/learn/coding-conventions/statements/',
      '/1.2/learn/coding-conventions/',
      '/1.1/learn/how-to-keep-ballerina-up-to-date/',
      '/1.1/learn/quick-tour/',
      '/1.1/learn/vscode-plugin/run-and-debug/',
      '/1.1/learn/vscode-plugin/graphical-editor/',
      '/1.1/learn/vscode-plugin/run-all-tests/',
      '/1.1/learn/vscode-plugin/language-intelligence/',
      '/1.1/learn/vscode-plugin/',
      '/1.1/learn/style-guide/',
      '/1.1/learn/cli-commands/',
      '/1.1/learn/intellij-plugin/using-the-intellij-plugin/',
      '/1.1/learn/intellij-plugin/using-intellij-plugin-features/',
      '/1.1/learn/how-to-use-openapi-tools/',
      '/1.1/learn/tools-ides/vscode-plugin/run-and-debug/',
      '/1.1/learn/tools-ides/vscode-plugin/documentation-viewer/',
      '/1.1/learn/tools-ides/vscode-plugin/graphical-editor/',
      '/1.1/learn/installing-ballerina/',
      '/1.1/learn/how-to-observe-ballerina-code/',
      '/1.1/learn/faq/',
      '/1.2/learn/cli-documentation/grpc/',
      '/1.2/learn/cli-documentation/grpc',
      '/1.2/learn/cli-documentation/update-tool/',
      '/1.2/learn/cli-documentation/update-tool',
      '/1.2/learn/calling-java-code-from-ballerina-and-vice-versa/',
      '/1.2/learn/calling-java-code-from-ballerina-and-vice-versa',
      '/1.2/learn/organizing-ballerina-code/package-layout/',
      '/1.2/learn/organizing-ballerina-code/package-layout',
      '/1.2/learn/organizing-ballerina-code/modules/',
      '/1.2/learn/organizing-ballerina-code/modules',
      '/1.2/learn/observing-ballerina-programs/observing-your-application-with-prometheus-grafana-and-jaeger/',
      '/1.2/learn/observing-ballerina-programs/observing-your-application-with-prometheus-grafana-and-jaeger',
      '/1.2/learn/hello-world/writing-your-first-ballerina-program/',
      '/1.2/learn/hello-world/writing-your-first-ballerina-program',
      '/1.2/learn/hello-world/creating-your-first-ballerina-package/',
      '/1.2/learn/hello-world/creating-your-first-ballerina-package',
      '/1.2/learn/visual-studio-code-extension/debugging/',
      '/1.2/learn/visual-studio-code-extension/debugging',
      '/1.2/learn/visual-studio-code-extension/diagram-editor/',
      '/1.2/learn/visual-studio-code-extension/diagram-editor',
      '/1.2/learn/visual-studio-code-extension/language-support/',
      '/1.2/learn/visual-studio-code-extension/language-support',
      '/1.2/learn/visual-studio-code-extension/vs-code-quick-start/',
      '/1.2/learn/visual-studio-code-extension/vs-code-quick-start',
      '/1.2/learn/deployment/azure-functions/',
      '/1.2/learn/deployment/azure-functions',
      '/1.2/learn/deployment/aws-lambda/',
      '/1.2/learn/deployment/aws-lambda',
      '/1.2/learn/cli-documentation/openapi/',
      '/1.2/learn/cli-documentation/openapi',
      '/1.2/learn/testing-ballerina-code/quick-start-on-testing/',
      '/1.2/learn/testing-ballerina-code/quick-start-on-testing',
      '/1.2/learn/testing-ballerina-code/mocking/',
      '/1.2/learn/testing-ballerina-code/mocking',
      '/1.2/learn/visual-studio-code-extension/executing-tests/',
      '/1.2/learn/visual-studio-code-extension/executing-tests',
      '/1.2/learn/testing-ballerina-code/writing-tests/',
      '/1.2/learn/testing-ballerina-code/writing-tests',
      '/1.2/learn/installing-ballerina/setting-up-ballerina/',
      '/1.2/learn/installing-ballerina/setting-up-ballerina',
      '/1.2/learn/installing-ballerina/installation-options/',
      '/1.2/learn/installing-ballerina/installation-options',
      '/1.2/learn/installing-ballerina/building-from-source/',
      '/1.2/learn/installing-ballerina/building-from-source',
      '/1.2/learn/generating-code-documentation/',
      '/1.2/learn/generating-code-documentation',
      '/1.2/learn/cli-documentation/cli-commands/ment/azure-functions/',
      '/1.2/learn/cli-documentation/cli-commands',
      '/1.2/learn/style-guide/expressions/',
      '/1.2/learn/style-guide/expressions',
      '/1.2/learn/style-guide/annotations-documentation-and-comments/',
      '/1.2/learn/style-guide/annotations-documentation-and-comments',
      '/1.2/learn/style-guide/top-level-definitions/',
      '/1.2/learn/style-guide/top-level-definitions/',
      '/1.2/learn/style-guide/operators-keywords-and-types/',
      '/1.2/learn/style-guide/operators-keywords-and-types',
      '/1.2/learn/style-guide/statements/',
      '/1.2/learn/style-guide/statements',
      '/1.2/learn/style-guide/coding-conventions/',
      '/1.2/learn/style-guide/coding-conventions',
      '/1.1/learn/keeping-ballerina-up-to-date',
      '/1.1/learn/keeping-ballerina-up-to-date/',
      '/1.1/learn/getting-started/quick-tour/',
      '/1.1/learn/getting-started/setting-up-visual-studio-code/run-and-debug/',
      '/1.1/learn/setting-up-visual-studio-code/graphical-editor',
      '/1.1/learn/tools-ides/setting-up-visual-studio-code/graphical-editor',
      '/1.1/learn/setting-up-visual-studio-code/run-all-tests',
      '/1.1/learn/tools-ides/setting-up-visual-studio-code/run-all-tests',
      '/1.1/learn/getting-started/setting-up-visual-studio-code/run-all-tests/',
      '/1.1/learn/setting-up-visual-studio-code/language-intelligence',
      '/1.1/learn/tools-ides/setting-up-visual-studio-code/language-intelligence',
      '/1.1/learn/getting-started/setting-up-visual-studio-code/language-intelligence/',
      '/1.1/learn/getting-started/setting-up-visual-studio-code/',
      '/1.1/learn/coding-conventions/',
      '/1.1/learn/using-the-cli-tools',
      '/1.1/learn/setting-up-intellij-idea/using-the-intellij-plugin',
      '/1.1/learn/tools-ides/setting-up-intellij-idea/using-the-intellij-plugin',
      '/1.1/learn/setting-up-intellij-idea/using-intellij-plugin-features',
      '/1.1/learn/tools-ides/setting-up-intellij-idea/using-intellij-plugin-features',
      '/1.1/learn/using-the-openapi-tools',
      '/1.1/learn/setting-up-visual-studio-code/run-and-debug',
      '/1.1/learn/tools-ides/setting-up-visual-studio-code/run-and-debug',
      '/1.1/learn/getting-started/setting-up-visual-studio-code/documentation-viewer/',
      '/1.1/learn/getting-started/setting-up-visual-studio-code/graphical-editor/',
      '/1.1/learn/getting-started/installing-ballerina/',
      '/1.1/learn/observing-ballerina-code/',
      '/1.1/learn/faqs',
      '/1.1/learn/faqs/',
      '/spec/lang/2019R3/experimental/',
      '/spec/lang/2019R2/',
      '/spec/lang/draft/',
      '/spec/lang/2019R1/',
      '/spec/lang/2020R1/',
      '/spec/lang/2019R3/',
      '/spec/lang/draft/latest/',
      '/spec/lang/',
      '/spec/lang/v2019R3/experimental.html',
      '/spec/lang/2019R3/experimental.html',
      ]
      
      async function asyncCall(element) {
        result.push(await config.transform(config, element))
      }
      
      additionalUrls.forEach(element => {
        asyncCall(element);
      });
      
  
      return result
    }
    // ...other options
  }
  
  // export default config
  module.exports = config;
  