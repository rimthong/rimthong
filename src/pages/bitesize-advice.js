import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BitesizeAdvicePage = () => (
  <Layout>
    <Seo title="Advice" />
    This is where I record whenever I find short, useful advice. Revised periodically to make sure the advice in question is still relevant.

    <div>
      <h2>Evaluating things</h2>
      When evaluating things from 1-10, disallow 7.
    </div>

    <div>
      <h2>Onboarding</h2>
      Onboarding requires two things:
      <ul>
        <li>Creating a feeling of belonging.</li>
        <li>Creating a sense of accomplishment.</li>
      </ul>
    </div>

    <div>
      <h2>Self care</h2>
      Remember to put on your oxygen mask first before helping others.
    </div>

  </Layout>
)

export default BitesizeAdvicePage
