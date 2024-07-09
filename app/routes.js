//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// v2 COMPANY DETAILS ROUTES START
router.get('v2company-details/contact-details', function (req, res) {
    res.redirect('company-details')
  })
  router.get('v2company-details/change-phone-number', function (req, res) {
    res.redirect('sarah-details')
  })

  router.get('v2company-details/change-email', function (req, res) {
    res.redirect('sarah-details')
  })

  router.get('v2company-details/change-name', function (req, res) {
    res.redirect('sarah-details')
  })

  router.get('v2company-details/add-another-contact', function (req, res) {
    res.redirect('added-contact')
  })

  router.get('v2company-details/change-phone-number2', function (req, res) {
    res.redirect('contact-details2')
  })

  router.get('v2company-details/change-email2', function (req, res) {
    res.redirect('contact-details2')
  })

  router.get('v2company-details/change-name2', function (req, res) {
    res.redirect('contact-details2')
  })

  router.get('v2company-details/added-contact', function (req, res) {
    res.redirect('main-contact')
  })

  router.get('v2company-details/main-contact', function (req, res) {
    res.redirect('company-details2')
  })

  router.get('v2company-details/postal-address', function (req, res) {
    res.redirect('address-lookup')
  })

  router.get('v2company-details/manual-address', function (req, res) {
    res.redirect('company-details')
  })

  router.get('v2company-details/change-query-type2', function (req, res) {
    res.redirect('contact-details2')
  })

  router.get('v2company-details/contact-preferences', function (req, res) {
    res.redirect('company-details2')
  })

  router.get('v2company-details/delete-contact', function (req, res) {
    res.redirect('company-details')
  })
// V2 COMPANY DETAILS ROUTES END

// router.get('/messages', function(req, res) {
//   res.render('messages/contact-history');
// });

