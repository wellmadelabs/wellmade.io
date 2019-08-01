import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { inputField, submitButton } from 'styles/forms.css';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Must enter email'),
});

class LeadSubmitForm extends React.Component {
  /*
   * Adapted from `ReferralForm`
   */
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
  }

  render() {
    const {
      apiUrl,
      setSubmitTrue,
      buttonType,
    } = this.props;
    return (
      <Formik
        initialValues={{
          email: '',
          mboStudioId: '',
          submitted: false,
        }}
        validationSchema={schema}
        onSubmit={(values, { setFieldValue, setSubmitting }) => {
          return fetch(`${apiUrl}/v1/add-site`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then(response => {
              setSubmitting(false);
              return response.json();
            })
            .then(function(json) {
              setFieldValue('submitted', true);
              setSubmitTrue();
            });
        }}
      >
        {({ values, isValid }) => (
          <Form>
            <div style={{ position: 'relative' }}>
              <Field
                css={
                  inputField()
                }
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                disabled={values.submitted}
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="email" aria-label="email" aria-required="true" />
            </div>
            <div style={{ position: 'relative' }}>
              <Field
                css={
                  inputField()
                }
                id="mbo-studio-id"
                type="text"
                name="mbo_site_id"
                placeholder="MBO Studio ID"
                disabled={values.submitted}
              />
              {/* eslint-disable-next-line */}
              <label htmlFor="email" aria-label="email" aria-required="true" />
            </div>
             <div>
              <button
                type="submit"
                css={
                  buttonType != 'drSubmit'
                    ? submitButton()
                    : submitButton(
                        'red',
                        'white',
                        'white',
                        'transparent',
                        'white',
                        'drSubmit'
                      )
                }
                onClick={
                  buttonType != 'drSubmit'
                    ? ''
                    : () => {
                      }
                }
                disabled={!isValid}
              >
                Get Working
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

LeadSubmitForm.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  sourceId: PropTypes.string.isRequired,
  sourceType: PropTypes.string.isRequired,
  campaignId: PropTypes.string.isRequired,
  setSubmitTrue: PropTypes.func.isRequired,
  buttonType: PropTypes.string,
};

export default LeadSubmitForm;
