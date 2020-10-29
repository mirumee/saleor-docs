---
title: API Reference
---

This document describes all queries, mutations, and types available in the Saleor GraphQL API.

<!-- START graphql-markdown -->

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [AccountAddressCreate](#accountaddresscreate)
    * [AccountAddressDelete](#accountaddressdelete)
    * [AccountAddressUpdate](#accountaddressupdate)
    * [AccountDelete](#accountdelete)
    * [AccountError](#accounterror)
    * [AccountRegister](#accountregister)
    * [AccountRequestDeletion](#accountrequestdeletion)
    * [AccountSetDefaultAddress](#accountsetdefaultaddress)
    * [AccountUpdate](#accountupdate)
    * [AccountUpdateMeta](#accountupdatemeta)
    * [Address](#address)
    * [AddressCreate](#addresscreate)
    * [AddressDelete](#addressdelete)
    * [AddressSetDefault](#addresssetdefault)
    * [AddressUpdate](#addressupdate)
    * [AddressValidationData](#addressvalidationdata)
    * [App](#app)
    * [AppActivate](#appactivate)
    * [AppCountableConnection](#appcountableconnection)
    * [AppCountableEdge](#appcountableedge)
    * [AppCreate](#appcreate)
    * [AppDeactivate](#appdeactivate)
    * [AppDelete](#appdelete)
    * [AppDeleteFailedInstallation](#appdeletefailedinstallation)
    * [AppError](#apperror)
    * [AppFetchManifest](#appfetchmanifest)
    * [AppInstall](#appinstall)
    * [AppInstallation](#appinstallation)
    * [AppRetryInstall](#appretryinstall)
    * [AppToken](#apptoken)
    * [AppTokenCreate](#apptokencreate)
    * [AppTokenDelete](#apptokendelete)
    * [AppTokenVerify](#apptokenverify)
    * [AppUpdate](#appupdate)
    * [AssignNavigation](#assignnavigation)
    * [Attribute](#attribute)
    * [AttributeAssign](#attributeassign)
    * [AttributeBulkDelete](#attributebulkdelete)
    * [AttributeClearMeta](#attributeclearmeta)
    * [AttributeClearPrivateMeta](#attributeclearprivatemeta)
    * [AttributeCountableConnection](#attributecountableconnection)
    * [AttributeCountableEdge](#attributecountableedge)
    * [AttributeCreate](#attributecreate)
    * [AttributeDelete](#attributedelete)
    * [AttributeReorderValues](#attributereordervalues)
    * [AttributeTranslatableContent](#attributetranslatablecontent)
    * [AttributeTranslate](#attributetranslate)
    * [AttributeTranslation](#attributetranslation)
    * [AttributeUnassign](#attributeunassign)
    * [AttributeUpdate](#attributeupdate)
    * [AttributeUpdateMeta](#attributeupdatemeta)
    * [AttributeUpdatePrivateMeta](#attributeupdateprivatemeta)
    * [AttributeValue](#attributevalue)
    * [AttributeValueBulkDelete](#attributevaluebulkdelete)
    * [AttributeValueCreate](#attributevaluecreate)
    * [AttributeValueDelete](#attributevaluedelete)
    * [AttributeValueTranslatableContent](#attributevaluetranslatablecontent)
    * [AttributeValueTranslate](#attributevaluetranslate)
    * [AttributeValueTranslation](#attributevaluetranslation)
    * [AttributeValueUpdate](#attributevalueupdate)
    * [AuthorizationKey](#authorizationkey)
    * [AuthorizationKeyAdd](#authorizationkeyadd)
    * [AuthorizationKeyDelete](#authorizationkeydelete)
    * [BulkProductError](#bulkproducterror)
    * [BulkStockError](#bulkstockerror)
    * [Category](#category)
    * [CategoryBulkDelete](#categorybulkdelete)
    * [CategoryClearMeta](#categoryclearmeta)
    * [CategoryClearPrivateMeta](#categoryclearprivatemeta)
    * [CategoryCountableConnection](#categorycountableconnection)
    * [CategoryCountableEdge](#categorycountableedge)
    * [CategoryCreate](#categorycreate)
    * [CategoryDelete](#categorydelete)
    * [CategoryTranslatableContent](#categorytranslatablecontent)
    * [CategoryTranslate](#categorytranslate)
    * [CategoryTranslation](#categorytranslation)
    * [CategoryUpdate](#categoryupdate)
    * [CategoryUpdateMeta](#categoryupdatemeta)
    * [CategoryUpdatePrivateMeta](#categoryupdateprivatemeta)
    * [Checkout](#checkout)
    * [CheckoutAddPromoCode](#checkoutaddpromocode)
    * [CheckoutBillingAddressUpdate](#checkoutbillingaddressupdate)
    * [CheckoutClearMeta](#checkoutclearmeta)
    * [CheckoutClearPrivateMeta](#checkoutclearprivatemeta)
    * [CheckoutComplete](#checkoutcomplete)
    * [CheckoutCountableConnection](#checkoutcountableconnection)
    * [CheckoutCountableEdge](#checkoutcountableedge)
    * [CheckoutCreate](#checkoutcreate)
    * [CheckoutCustomerAttach](#checkoutcustomerattach)
    * [CheckoutCustomerDetach](#checkoutcustomerdetach)
    * [CheckoutEmailUpdate](#checkoutemailupdate)
    * [CheckoutError](#checkouterror)
    * [CheckoutLine](#checkoutline)
    * [CheckoutLineCountableConnection](#checkoutlinecountableconnection)
    * [CheckoutLineCountableEdge](#checkoutlinecountableedge)
    * [CheckoutLineDelete](#checkoutlinedelete)
    * [CheckoutLinesAdd](#checkoutlinesadd)
    * [CheckoutLinesUpdate](#checkoutlinesupdate)
    * [CheckoutPaymentCreate](#checkoutpaymentcreate)
    * [CheckoutRemovePromoCode](#checkoutremovepromocode)
    * [CheckoutShippingAddressUpdate](#checkoutshippingaddressupdate)
    * [CheckoutShippingMethodUpdate](#checkoutshippingmethodupdate)
    * [CheckoutUpdateMeta](#checkoutupdatemeta)
    * [CheckoutUpdatePrivateMeta](#checkoutupdateprivatemeta)
    * [ChoiceValue](#choicevalue)
    * [Collection](#collection)
    * [CollectionAddProducts](#collectionaddproducts)
    * [CollectionBulkDelete](#collectionbulkdelete)
    * [CollectionBulkPublish](#collectionbulkpublish)
    * [CollectionClearMeta](#collectionclearmeta)
    * [CollectionClearPrivateMeta](#collectionclearprivatemeta)
    * [CollectionCountableConnection](#collectioncountableconnection)
    * [CollectionCountableEdge](#collectioncountableedge)
    * [CollectionCreate](#collectioncreate)
    * [CollectionDelete](#collectiondelete)
    * [CollectionRemoveProducts](#collectionremoveproducts)
    * [CollectionReorderProducts](#collectionreorderproducts)
    * [CollectionTranslatableContent](#collectiontranslatablecontent)
    * [CollectionTranslate](#collectiontranslate)
    * [CollectionTranslation](#collectiontranslation)
    * [CollectionUpdate](#collectionupdate)
    * [CollectionUpdateMeta](#collectionupdatemeta)
    * [CollectionUpdatePrivateMeta](#collectionupdateprivatemeta)
    * [ConfigurationItem](#configurationitem)
    * [ConfirmAccount](#confirmaccount)
    * [ConfirmEmailChange](#confirmemailchange)
    * [CountryDisplay](#countrydisplay)
    * [CreateToken](#createtoken)
    * [CreditCard](#creditcard)
    * [CustomerBulkDelete](#customerbulkdelete)
    * [CustomerCreate](#customercreate)
    * [CustomerDelete](#customerdelete)
    * [CustomerEvent](#customerevent)
    * [CustomerUpdate](#customerupdate)
    * [DeactivateAllUserTokens](#deactivateallusertokens)
    * [DeleteMetadata](#deletemetadata)
    * [DeletePrivateMetadata](#deleteprivatemetadata)
    * [DigitalContent](#digitalcontent)
    * [DigitalContentCountableConnection](#digitalcontentcountableconnection)
    * [DigitalContentCountableEdge](#digitalcontentcountableedge)
    * [DigitalContentCreate](#digitalcontentcreate)
    * [DigitalContentDelete](#digitalcontentdelete)
    * [DigitalContentUpdate](#digitalcontentupdate)
    * [DigitalContentUrl](#digitalcontenturl)
    * [DigitalContentUrlCreate](#digitalcontenturlcreate)
    * [DiscountError](#discounterror)
    * [Domain](#domain)
    * [DraftOrderBulkDelete](#draftorderbulkdelete)
    * [DraftOrderComplete](#draftordercomplete)
    * [DraftOrderCreate](#draftordercreate)
    * [DraftOrderDelete](#draftorderdelete)
    * [DraftOrderLineDelete](#draftorderlinedelete)
    * [DraftOrderLineUpdate](#draftorderlineupdate)
    * [DraftOrderLinesBulkDelete](#draftorderlinesbulkdelete)
    * [DraftOrderLinesCreate](#draftorderlinescreate)
    * [DraftOrderUpdate](#draftorderupdate)
    * [Error](#error)
    * [ExportError](#exporterror)
    * [ExportEvent](#exportevent)
    * [ExportFile](#exportfile)
    * [ExportFileCountableConnection](#exportfilecountableconnection)
    * [ExportFileCountableEdge](#exportfilecountableedge)
    * [ExportProducts](#exportproducts)
    * [Fulfillment](#fulfillment)
    * [FulfillmentCancel](#fulfillmentcancel)
    * [FulfillmentClearMeta](#fulfillmentclearmeta)
    * [FulfillmentClearPrivateMeta](#fulfillmentclearprivatemeta)
    * [FulfillmentLine](#fulfillmentline)
    * [FulfillmentUpdateMeta](#fulfillmentupdatemeta)
    * [FulfillmentUpdatePrivateMeta](#fulfillmentupdateprivatemeta)
    * [FulfillmentUpdateTracking](#fulfillmentupdatetracking)
    * [GatewayConfigLine](#gatewayconfigline)
    * [Geolocalization](#geolocalization)
    * [GiftCard](#giftcard)
    * [GiftCardActivate](#giftcardactivate)
    * [GiftCardCountableConnection](#giftcardcountableconnection)
    * [GiftCardCountableEdge](#giftcardcountableedge)
    * [GiftCardCreate](#giftcardcreate)
    * [GiftCardDeactivate](#giftcarddeactivate)
    * [GiftCardError](#giftcarderror)
    * [GiftCardUpdate](#giftcardupdate)
    * [Group](#group)
    * [GroupCountableConnection](#groupcountableconnection)
    * [GroupCountableEdge](#groupcountableedge)
    * [HomepageCollectionUpdate](#homepagecollectionupdate)
    * [Image](#image)
    * [Invoice](#invoice)
    * [InvoiceCreate](#invoicecreate)
    * [InvoiceDelete](#invoicedelete)
    * [InvoiceError](#invoiceerror)
    * [InvoiceRequest](#invoicerequest)
    * [InvoiceRequestDelete](#invoicerequestdelete)
    * [InvoiceSendEmail](#invoicesendemail)
    * [InvoiceUpdate](#invoiceupdate)
    * [LanguageDisplay](#languagedisplay)
    * [Manifest](#manifest)
    * [Margin](#margin)
    * [Menu](#menu)
    * [MenuBulkDelete](#menubulkdelete)
    * [MenuCountableConnection](#menucountableconnection)
    * [MenuCountableEdge](#menucountableedge)
    * [MenuCreate](#menucreate)
    * [MenuDelete](#menudelete)
    * [MenuError](#menuerror)
    * [MenuItem](#menuitem)
    * [MenuItemBulkDelete](#menuitembulkdelete)
    * [MenuItemCountableConnection](#menuitemcountableconnection)
    * [MenuItemCountableEdge](#menuitemcountableedge)
    * [MenuItemCreate](#menuitemcreate)
    * [MenuItemDelete](#menuitemdelete)
    * [MenuItemMove](#menuitemmove)
    * [MenuItemTranslatableContent](#menuitemtranslatablecontent)
    * [MenuItemTranslate](#menuitemtranslate)
    * [MenuItemTranslation](#menuitemtranslation)
    * [MenuItemUpdate](#menuitemupdate)
    * [MenuUpdate](#menuupdate)
    * [MetaClientStore](#metaclientstore)
    * [MetaItem](#metaitem)
    * [MetaStore](#metastore)
    * [MetadataError](#metadataerror)
    * [MetadataItem](#metadataitem)
    * [Money](#money)
    * [MoneyRange](#moneyrange)
    * [Navigation](#navigation)
    * [Order](#order)
    * [OrderAddNote](#orderaddnote)
    * [OrderBulkCancel](#orderbulkcancel)
    * [OrderCancel](#ordercancel)
    * [OrderCapture](#ordercapture)
    * [OrderClearMeta](#orderclearmeta)
    * [OrderClearPrivateMeta](#orderclearprivatemeta)
    * [OrderCountableConnection](#ordercountableconnection)
    * [OrderCountableEdge](#ordercountableedge)
    * [OrderError](#ordererror)
    * [OrderEvent](#orderevent)
    * [OrderEventCountableConnection](#ordereventcountableconnection)
    * [OrderEventCountableEdge](#ordereventcountableedge)
    * [OrderEventOrderLineObject](#ordereventorderlineobject)
    * [OrderFulfill](#orderfulfill)
    * [OrderLine](#orderline)
    * [OrderMarkAsPaid](#ordermarkaspaid)
    * [OrderRefund](#orderrefund)
    * [OrderUpdate](#orderupdate)
    * [OrderUpdateMeta](#orderupdatemeta)
    * [OrderUpdatePrivateMeta](#orderupdateprivatemeta)
    * [OrderUpdateShipping](#orderupdateshipping)
    * [OrderVoid](#ordervoid)
    * [Page](#page)
    * [PageBulkDelete](#pagebulkdelete)
    * [PageBulkPublish](#pagebulkpublish)
    * [PageCountableConnection](#pagecountableconnection)
    * [PageCountableEdge](#pagecountableedge)
    * [PageCreate](#pagecreate)
    * [PageDelete](#pagedelete)
    * [PageError](#pageerror)
    * [PageInfo](#pageinfo)
    * [PageTranslatableContent](#pagetranslatablecontent)
    * [PageTranslate](#pagetranslate)
    * [PageTranslation](#pagetranslation)
    * [PageUpdate](#pageupdate)
    * [PasswordChange](#passwordchange)
    * [Payment](#payment)
    * [PaymentCapture](#paymentcapture)
    * [PaymentCountableConnection](#paymentcountableconnection)
    * [PaymentCountableEdge](#paymentcountableedge)
    * [PaymentError](#paymenterror)
    * [PaymentGateway](#paymentgateway)
    * [PaymentRefund](#paymentrefund)
    * [PaymentSource](#paymentsource)
    * [PaymentVoid](#paymentvoid)
    * [Permission](#permission)
    * [PermissionGroupCreate](#permissiongroupcreate)
    * [PermissionGroupDelete](#permissiongroupdelete)
    * [PermissionGroupError](#permissiongrouperror)
    * [PermissionGroupUpdate](#permissiongroupupdate)
    * [Plugin](#plugin)
    * [PluginCountableConnection](#plugincountableconnection)
    * [PluginCountableEdge](#plugincountableedge)
    * [PluginError](#pluginerror)
    * [PluginUpdate](#pluginupdate)
    * [Product](#product)
    * [ProductAttributeError](#productattributeerror)
    * [ProductBulkDelete](#productbulkdelete)
    * [ProductBulkPublish](#productbulkpublish)
    * [ProductClearMeta](#productclearmeta)
    * [ProductClearPrivateMeta](#productclearprivatemeta)
    * [ProductCountableConnection](#productcountableconnection)
    * [ProductCountableEdge](#productcountableedge)
    * [ProductCreate](#productcreate)
    * [ProductDelete](#productdelete)
    * [ProductError](#producterror)
    * [ProductImage](#productimage)
    * [ProductImageBulkDelete](#productimagebulkdelete)
    * [ProductImageCreate](#productimagecreate)
    * [ProductImageDelete](#productimagedelete)
    * [ProductImageReorder](#productimagereorder)
    * [ProductImageUpdate](#productimageupdate)
    * [ProductPricingInfo](#productpricinginfo)
    * [ProductSetAvailabilityForPurchase](#productsetavailabilityforpurchase)
    * [ProductTranslatableContent](#producttranslatablecontent)
    * [ProductTranslate](#producttranslate)
    * [ProductTranslation](#producttranslation)
    * [ProductType](#producttype)
    * [ProductTypeBulkDelete](#producttypebulkdelete)
    * [ProductTypeClearMeta](#producttypeclearmeta)
    * [ProductTypeClearPrivateMeta](#producttypeclearprivatemeta)
    * [ProductTypeCountableConnection](#producttypecountableconnection)
    * [ProductTypeCountableEdge](#producttypecountableedge)
    * [ProductTypeCreate](#producttypecreate)
    * [ProductTypeDelete](#producttypedelete)
    * [ProductTypeReorderAttributes](#producttypereorderattributes)
    * [ProductTypeUpdate](#producttypeupdate)
    * [ProductTypeUpdateMeta](#producttypeupdatemeta)
    * [ProductTypeUpdatePrivateMeta](#producttypeupdateprivatemeta)
    * [ProductUpdate](#productupdate)
    * [ProductUpdateMeta](#productupdatemeta)
    * [ProductUpdatePrivateMeta](#productupdateprivatemeta)
    * [ProductVariant](#productvariant)
    * [ProductVariantBulkCreate](#productvariantbulkcreate)
    * [ProductVariantBulkDelete](#productvariantbulkdelete)
    * [ProductVariantClearMeta](#productvariantclearmeta)
    * [ProductVariantClearPrivateMeta](#productvariantclearprivatemeta)
    * [ProductVariantCountableConnection](#productvariantcountableconnection)
    * [ProductVariantCountableEdge](#productvariantcountableedge)
    * [ProductVariantCreate](#productvariantcreate)
    * [ProductVariantDelete](#productvariantdelete)
    * [ProductVariantReorder](#productvariantreorder)
    * [ProductVariantSetDefault](#productvariantsetdefault)
    * [ProductVariantStocksCreate](#productvariantstockscreate)
    * [ProductVariantStocksDelete](#productvariantstocksdelete)
    * [ProductVariantStocksUpdate](#productvariantstocksupdate)
    * [ProductVariantTranslatableContent](#productvarianttranslatablecontent)
    * [ProductVariantTranslate](#productvarianttranslate)
    * [ProductVariantTranslation](#productvarianttranslation)
    * [ProductVariantUpdate](#productvariantupdate)
    * [ProductVariantUpdateMeta](#productvariantupdatemeta)
    * [ProductVariantUpdatePrivateMeta](#productvariantupdateprivatemeta)
    * [ReducedRate](#reducedrate)
    * [RefreshToken](#refreshtoken)
    * [RequestEmailChange](#requestemailchange)
    * [RequestPasswordReset](#requestpasswordreset)
    * [Sale](#sale)
    * [SaleAddCatalogues](#saleaddcatalogues)
    * [SaleBulkDelete](#salebulkdelete)
    * [SaleCountableConnection](#salecountableconnection)
    * [SaleCountableEdge](#salecountableedge)
    * [SaleCreate](#salecreate)
    * [SaleDelete](#saledelete)
    * [SaleRemoveCatalogues](#saleremovecatalogues)
    * [SaleTranslatableContent](#saletranslatablecontent)
    * [SaleTranslate](#saletranslate)
    * [SaleTranslation](#saletranslation)
    * [SaleUpdate](#saleupdate)
    * [SelectedAttribute](#selectedattribute)
    * [ServiceAccount](#serviceaccount)
    * [ServiceAccountClearPrivateMeta](#serviceaccountclearprivatemeta)
    * [ServiceAccountCountableConnection](#serviceaccountcountableconnection)
    * [ServiceAccountCountableEdge](#serviceaccountcountableedge)
    * [ServiceAccountCreate](#serviceaccountcreate)
    * [ServiceAccountDelete](#serviceaccountdelete)
    * [ServiceAccountToken](#serviceaccounttoken)
    * [ServiceAccountTokenCreate](#serviceaccounttokencreate)
    * [ServiceAccountTokenDelete](#serviceaccounttokendelete)
    * [ServiceAccountUpdate](#serviceaccountupdate)
    * [ServiceAccountUpdatePrivateMeta](#serviceaccountupdateprivatemeta)
    * [SetPassword](#setpassword)
    * [ShippingError](#shippingerror)
    * [ShippingMethod](#shippingmethod)
    * [ShippingMethodTranslatableContent](#shippingmethodtranslatablecontent)
    * [ShippingMethodTranslation](#shippingmethodtranslation)
    * [ShippingPriceBulkDelete](#shippingpricebulkdelete)
    * [ShippingPriceCreate](#shippingpricecreate)
    * [ShippingPriceDelete](#shippingpricedelete)
    * [ShippingPriceTranslate](#shippingpricetranslate)
    * [ShippingPriceUpdate](#shippingpriceupdate)
    * [ShippingZone](#shippingzone)
    * [ShippingZoneBulkDelete](#shippingzonebulkdelete)
    * [ShippingZoneCountableConnection](#shippingzonecountableconnection)
    * [ShippingZoneCountableEdge](#shippingzonecountableedge)
    * [ShippingZoneCreate](#shippingzonecreate)
    * [ShippingZoneDelete](#shippingzonedelete)
    * [ShippingZoneUpdate](#shippingzoneupdate)
    * [Shop](#shop)
    * [ShopAddressUpdate](#shopaddressupdate)
    * [ShopDomainUpdate](#shopdomainupdate)
    * [ShopError](#shoperror)
    * [ShopFetchTaxRates](#shopfetchtaxrates)
    * [ShopSettingsTranslate](#shopsettingstranslate)
    * [ShopSettingsUpdate](#shopsettingsupdate)
    * [ShopTranslation](#shoptranslation)
    * [StaffBulkDelete](#staffbulkdelete)
    * [StaffCreate](#staffcreate)
    * [StaffDelete](#staffdelete)
    * [StaffError](#stafferror)
    * [StaffNotificationRecipient](#staffnotificationrecipient)
    * [StaffNotificationRecipientCreate](#staffnotificationrecipientcreate)
    * [StaffNotificationRecipientDelete](#staffnotificationrecipientdelete)
    * [StaffNotificationRecipientUpdate](#staffnotificationrecipientupdate)
    * [StaffUpdate](#staffupdate)
    * [Stock](#stock)
    * [StockCountableConnection](#stockcountableconnection)
    * [StockCountableEdge](#stockcountableedge)
    * [StockError](#stockerror)
    * [TaxType](#taxtype)
    * [TaxedMoney](#taxedmoney)
    * [TaxedMoneyRange](#taxedmoneyrange)
    * [Transaction](#transaction)
    * [TranslatableItemConnection](#translatableitemconnection)
    * [TranslatableItemEdge](#translatableitemedge)
    * [TranslationError](#translationerror)
    * [UpdateMetadata](#updatemetadata)
    * [UpdatePrivateMetadata](#updateprivatemetadata)
    * [User](#user)
    * [UserAvatarDelete](#useravatardelete)
    * [UserAvatarUpdate](#useravatarupdate)
    * [UserBulkSetActive](#userbulksetactive)
    * [UserClearMeta](#userclearmeta)
    * [UserClearPrivateMeta](#userclearprivatemeta)
    * [UserCountableConnection](#usercountableconnection)
    * [UserCountableEdge](#usercountableedge)
    * [UserPermission](#userpermission)
    * [UserUpdateMeta](#userupdatemeta)
    * [UserUpdatePrivateMeta](#userupdateprivatemeta)
    * [VAT](#vat)
    * [VariantImageAssign](#variantimageassign)
    * [VariantImageUnassign](#variantimageunassign)
    * [VariantPricingInfo](#variantpricinginfo)
    * [VerifyToken](#verifytoken)
    * [Voucher](#voucher)
    * [VoucherAddCatalogues](#voucheraddcatalogues)
    * [VoucherBulkDelete](#voucherbulkdelete)
    * [VoucherCountableConnection](#vouchercountableconnection)
    * [VoucherCountableEdge](#vouchercountableedge)
    * [VoucherCreate](#vouchercreate)
    * [VoucherDelete](#voucherdelete)
    * [VoucherRemoveCatalogues](#voucherremovecatalogues)
    * [VoucherTranslatableContent](#vouchertranslatablecontent)
    * [VoucherTranslate](#vouchertranslate)
    * [VoucherTranslation](#vouchertranslation)
    * [VoucherUpdate](#voucherupdate)
    * [Warehouse](#warehouse)
    * [WarehouseCountableConnection](#warehousecountableconnection)
    * [WarehouseCountableEdge](#warehousecountableedge)
    * [WarehouseCreate](#warehousecreate)
    * [WarehouseDelete](#warehousedelete)
    * [WarehouseError](#warehouseerror)
    * [WarehouseShippingZoneAssign](#warehouseshippingzoneassign)
    * [WarehouseShippingZoneUnassign](#warehouseshippingzoneunassign)
    * [WarehouseUpdate](#warehouseupdate)
    * [Webhook](#webhook)
    * [WebhookCountableConnection](#webhookcountableconnection)
    * [WebhookCountableEdge](#webhookcountableedge)
    * [WebhookCreate](#webhookcreate)
    * [WebhookDelete](#webhookdelete)
    * [WebhookError](#webhookerror)
    * [WebhookEvent](#webhookevent)
    * [WebhookUpdate](#webhookupdate)
    * [Weight](#weight)
    * [_Service](#_service)
  * [Inputs](#inputs)
    * [AccountInput](#accountinput)
    * [AccountRegisterInput](#accountregisterinput)
    * [AddressInput](#addressinput)
    * [AppFilterInput](#appfilterinput)
    * [AppInput](#appinput)
    * [AppInstallInput](#appinstallinput)
    * [AppSortingInput](#appsortinginput)
    * [AppTokenInput](#apptokeninput)
    * [AttributeAssignInput](#attributeassigninput)
    * [AttributeCreateInput](#attributecreateinput)
    * [AttributeFilterInput](#attributefilterinput)
    * [AttributeInput](#attributeinput)
    * [AttributeSortingInput](#attributesortinginput)
    * [AttributeUpdateInput](#attributeupdateinput)
    * [AttributeValueCreateInput](#attributevaluecreateinput)
    * [AttributeValueInput](#attributevalueinput)
    * [AuthorizationKeyInput](#authorizationkeyinput)
    * [CatalogueInput](#catalogueinput)
    * [CategoryFilterInput](#categoryfilterinput)
    * [CategoryInput](#categoryinput)
    * [CategorySortingInput](#categorysortinginput)
    * [CheckoutCreateInput](#checkoutcreateinput)
    * [CheckoutLineInput](#checkoutlineinput)
    * [CollectionCreateInput](#collectioncreateinput)
    * [CollectionFilterInput](#collectionfilterinput)
    * [CollectionInput](#collectioninput)
    * [CollectionSortingInput](#collectionsortinginput)
    * [ConfigurationItemInput](#configurationiteminput)
    * [CustomerFilterInput](#customerfilterinput)
    * [CustomerInput](#customerinput)
    * [DateRangeInput](#daterangeinput)
    * [DateTimeRangeInput](#datetimerangeinput)
    * [DigitalContentInput](#digitalcontentinput)
    * [DigitalContentUploadInput](#digitalcontentuploadinput)
    * [DigitalContentUrlCreateInput](#digitalcontenturlcreateinput)
    * [DraftOrderCreateInput](#draftordercreateinput)
    * [DraftOrderInput](#draftorderinput)
    * [ExportFileFilterInput](#exportfilefilterinput)
    * [ExportFileSortingInput](#exportfilesortinginput)
    * [ExportInfoInput](#exportinfoinput)
    * [ExportProductsInput](#exportproductsinput)
    * [FulfillmentCancelInput](#fulfillmentcancelinput)
    * [FulfillmentUpdateTrackingInput](#fulfillmentupdatetrackinginput)
    * [GiftCardCreateInput](#giftcardcreateinput)
    * [GiftCardUpdateInput](#giftcardupdateinput)
    * [IntRangeInput](#intrangeinput)
    * [InvoiceCreateInput](#invoicecreateinput)
    * [MenuCreateInput](#menucreateinput)
    * [MenuFilterInput](#menufilterinput)
    * [MenuInput](#menuinput)
    * [MenuItemCreateInput](#menuitemcreateinput)
    * [MenuItemFilterInput](#menuitemfilterinput)
    * [MenuItemInput](#menuiteminput)
    * [MenuItemMoveInput](#menuitemmoveinput)
    * [MenuItemSortingInput](#menuitemsortinginput)
    * [MenuSortingInput](#menusortinginput)
    * [MetaInput](#metainput)
    * [MetaPath](#metapath)
    * [MetadataInput](#metadatainput)
    * [MoveProductInput](#moveproductinput)
    * [NameTranslationInput](#nametranslationinput)
    * [OrderAddNoteInput](#orderaddnoteinput)
    * [OrderDraftFilterInput](#orderdraftfilterinput)
    * [OrderFilterInput](#orderfilterinput)
    * [OrderFulfillInput](#orderfulfillinput)
    * [OrderFulfillLineInput](#orderfulfilllineinput)
    * [OrderFulfillStockInput](#orderfulfillstockinput)
    * [OrderLineCreateInput](#orderlinecreateinput)
    * [OrderLineInput](#orderlineinput)
    * [OrderSortingInput](#ordersortinginput)
    * [OrderUpdateInput](#orderupdateinput)
    * [OrderUpdateShippingInput](#orderupdateshippinginput)
    * [PageFilterInput](#pagefilterinput)
    * [PageInput](#pageinput)
    * [PageSortingInput](#pagesortinginput)
    * [PageTranslationInput](#pagetranslationinput)
    * [PaymentInput](#paymentinput)
    * [PermissionGroupCreateInput](#permissiongroupcreateinput)
    * [PermissionGroupFilterInput](#permissiongroupfilterinput)
    * [PermissionGroupSortingInput](#permissiongroupsortinginput)
    * [PermissionGroupUpdateInput](#permissiongroupupdateinput)
    * [PluginFilterInput](#pluginfilterinput)
    * [PluginSortingInput](#pluginsortinginput)
    * [PluginUpdateInput](#pluginupdateinput)
    * [PriceRangeInput](#pricerangeinput)
    * [ProductCreateInput](#productcreateinput)
    * [ProductFilterInput](#productfilterinput)
    * [ProductImageCreateInput](#productimagecreateinput)
    * [ProductImageUpdateInput](#productimageupdateinput)
    * [ProductInput](#productinput)
    * [ProductOrder](#productorder)
    * [ProductStockFilterInput](#productstockfilterinput)
    * [ProductTypeFilterInput](#producttypefilterinput)
    * [ProductTypeInput](#producttypeinput)
    * [ProductTypeSortingInput](#producttypesortinginput)
    * [ProductVariantBulkCreateInput](#productvariantbulkcreateinput)
    * [ProductVariantCreateInput](#productvariantcreateinput)
    * [ProductVariantInput](#productvariantinput)
    * [ReorderInput](#reorderinput)
    * [SaleFilterInput](#salefilterinput)
    * [SaleInput](#saleinput)
    * [SaleSortingInput](#salesortinginput)
    * [SeoInput](#seoinput)
    * [ServiceAccountFilterInput](#serviceaccountfilterinput)
    * [ServiceAccountInput](#serviceaccountinput)
    * [ServiceAccountSortingInput](#serviceaccountsortinginput)
    * [ServiceAccountTokenInput](#serviceaccounttokeninput)
    * [ShippingPriceInput](#shippingpriceinput)
    * [ShippingZoneCreateInput](#shippingzonecreateinput)
    * [ShippingZoneUpdateInput](#shippingzoneupdateinput)
    * [ShopSettingsInput](#shopsettingsinput)
    * [ShopSettingsTranslationInput](#shopsettingstranslationinput)
    * [SiteDomainInput](#sitedomaininput)
    * [StaffCreateInput](#staffcreateinput)
    * [StaffNotificationRecipientInput](#staffnotificationrecipientinput)
    * [StaffUpdateInput](#staffupdateinput)
    * [StaffUserInput](#staffuserinput)
    * [StockFilterInput](#stockfilterinput)
    * [StockInput](#stockinput)
    * [TranslationInput](#translationinput)
    * [UpdateInvoiceInput](#updateinvoiceinput)
    * [UserCreateInput](#usercreateinput)
    * [UserSortingInput](#usersortinginput)
    * [VoucherFilterInput](#voucherfilterinput)
    * [VoucherInput](#voucherinput)
    * [VoucherSortingInput](#vouchersortinginput)
    * [WarehouseAddressInput](#warehouseaddressinput)
    * [WarehouseCreateInput](#warehousecreateinput)
    * [WarehouseFilterInput](#warehousefilterinput)
    * [WarehouseSortingInput](#warehousesortinginput)
    * [WarehouseUpdateInput](#warehouseupdateinput)
    * [WebhookCreateInput](#webhookcreateinput)
    * [WebhookFilterInput](#webhookfilterinput)
    * [WebhookSortingInput](#webhooksortinginput)
    * [WebhookUpdateInput](#webhookupdateinput)
  * [Enums](#enums)
    * [AccountErrorCode](#accounterrorcode)
    * [AddressTypeEnum](#addresstypeenum)
    * [AppErrorCode](#apperrorcode)
    * [AppSortField](#appsortfield)
    * [AppTypeEnum](#apptypeenum)
    * [AttributeInputTypeEnum](#attributeinputtypeenum)
    * [AttributeSortField](#attributesortfield)
    * [AttributeTypeEnum](#attributetypeenum)
    * [AttributeValueType](#attributevaluetype)
    * [AuthorizationKeyType](#authorizationkeytype)
    * [CategorySortField](#categorysortfield)
    * [CheckoutErrorCode](#checkouterrorcode)
    * [CollectionPublished](#collectionpublished)
    * [CollectionSortField](#collectionsortfield)
    * [ConfigurationTypeFieldEnum](#configurationtypefieldenum)
    * [CountryCode](#countrycode)
    * [CustomerEventsEnum](#customereventsenum)
    * [DiscountErrorCode](#discounterrorcode)
    * [DiscountStatusEnum](#discountstatusenum)
    * [DiscountValueTypeEnum](#discountvaluetypeenum)
    * [ExportErrorCode](#exporterrorcode)
    * [ExportEventsEnum](#exporteventsenum)
    * [ExportFileSortField](#exportfilesortfield)
    * [ExportScope](#exportscope)
    * [FileTypesEnum](#filetypesenum)
    * [FulfillmentStatus](#fulfillmentstatus)
    * [GiftCardErrorCode](#giftcarderrorcode)
    * [InvoiceErrorCode](#invoiceerrorcode)
    * [JobStatusEnum](#jobstatusenum)
    * [LanguageCodeEnum](#languagecodeenum)
    * [MenuErrorCode](#menuerrorcode)
    * [MenuItemsSortField](#menuitemssortfield)
    * [MenuSortField](#menusortfield)
    * [MetadataErrorCode](#metadataerrorcode)
    * [NavigationType](#navigationtype)
    * [OrderAction](#orderaction)
    * [OrderDirection](#orderdirection)
    * [OrderErrorCode](#ordererrorcode)
    * [OrderEventsEmailsEnum](#ordereventsemailsenum)
    * [OrderEventsEnum](#ordereventsenum)
    * [OrderSortField](#ordersortfield)
    * [OrderStatus](#orderstatus)
    * [OrderStatusFilter](#orderstatusfilter)
    * [PageErrorCode](#pageerrorcode)
    * [PageSortField](#pagesortfield)
    * [PaymentChargeStatusEnum](#paymentchargestatusenum)
    * [PaymentErrorCode](#paymenterrorcode)
    * [PermissionEnum](#permissionenum)
    * [PermissionGroupErrorCode](#permissiongrouperrorcode)
    * [PermissionGroupSortField](#permissiongroupsortfield)
    * [PluginErrorCode](#pluginerrorcode)
    * [PluginSortField](#pluginsortfield)
    * [ProductErrorCode](#producterrorcode)
    * [ProductFieldEnum](#productfieldenum)
    * [ProductOrderField](#productorderfield)
    * [ProductTypeConfigurable](#producttypeconfigurable)
    * [ProductTypeEnum](#producttypeenum)
    * [ProductTypeSortField](#producttypesortfield)
    * [ReportingPeriod](#reportingperiod)
    * [SaleSortField](#salesortfield)
    * [SaleType](#saletype)
    * [ServiceAccountSortField](#serviceaccountsortfield)
    * [ShippingErrorCode](#shippingerrorcode)
    * [ShippingMethodTypeEnum](#shippingmethodtypeenum)
    * [ShopErrorCode](#shoperrorcode)
    * [StaffMemberStatus](#staffmemberstatus)
    * [StockAvailability](#stockavailability)
    * [StockErrorCode](#stockerrorcode)
    * [TaxRateType](#taxratetype)
    * [TransactionError](#transactionerror)
    * [TransactionKind](#transactionkind)
    * [TranslatableKinds](#translatablekinds)
    * [TranslationErrorCode](#translationerrorcode)
    * [UserSortField](#usersortfield)
    * [VoucherDiscountType](#voucherdiscounttype)
    * [VoucherSortField](#vouchersortfield)
    * [VoucherTypeEnum](#vouchertypeenum)
    * [WarehouseErrorCode](#warehouseerrorcode)
    * [WarehouseSortField](#warehousesortfield)
    * [WebhookErrorCode](#webhookerrorcode)
    * [WebhookEventTypeEnum](#webhookeventtypeenum)
    * [WebhookSampleEventTypeEnum](#webhooksampleeventtypeenum)
    * [WebhookSortField](#webhooksortfield)
    * [WeightUnitsEnum](#weightunitsenum)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Date](#date)
    * [DateTime](#datetime)
    * [Float](#float)
    * [GenericScalar](#genericscalar)
    * [ID](#id)
    * [Int](#int)
    * [JSONString](#jsonstring)
    * [PositiveDecimal](#positivedecimal)
    * [String](#string)
    * [UUID](#uuid)
    * [Upload](#upload)
    * [WeightScalar](#weightscalar)
    * [_Any](#_any)
  * [Interfaces](#interfaces)
    * [Job](#job)
    * [Node](#node)
    * [ObjectWithMetadata](#objectwithmetadata)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>webhook</strong></td>
<td valign="top"><a href="#webhook">Webhook</a></td>
<td>

Look up a webhook by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the webhook.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhooks</strong> ⚠️</td>
<td valign="top"><a href="#webhookcountableconnection">WebhookCountableConnection</a></td>
<td>

List of webhooks.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use webhooks field on app(s) query instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#webhooksortinginput">WebhookSortingInput</a></td>
<td>

Sort webhooks.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#webhookfilterinput">WebhookFilterInput</a></td>
<td>

Filtering options for webhooks.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhookEvents</strong></td>
<td valign="top">[<a href="#webhookevent">WebhookEvent</a>]</td>
<td>

List of all available webhook events.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhookSamplePayload</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td>

Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">eventType</td>
<td valign="top"><a href="#webhooksampleeventtypeenum">WebhookSampleEventTypeEnum</a>!</td>
<td>

Name of the requested event type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a></td>
<td>

Look up a warehouse by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an warehouse

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouses</strong></td>
<td valign="top"><a href="#warehousecountableconnection">WarehouseCountableConnection</a></td>
<td>

List of warehouses.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#warehousefilterinput">WarehouseFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#warehousesortinginput">WarehouseSortingInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translations</strong></td>
<td valign="top"><a href="#translatableitemconnection">TranslatableItemConnection</a></td>
<td>

Returns a list of all translatable items of a given kind.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">kind</td>
<td valign="top"><a href="#translatablekinds">TranslatableKinds</a>!</td>
<td>

Kind of objects to retrieve.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#translatableitem">TranslatableItem</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the object to retrieve.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">kind</td>
<td valign="top"><a href="#translatablekinds">TranslatableKinds</a>!</td>
<td>

Kind of the object to retrieve.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stock</strong></td>
<td valign="top"><a href="#stock">Stock</a></td>
<td>

Look up a stock by ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an warehouse

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stocks</strong></td>
<td valign="top"><a href="#stockcountableconnection">StockCountableConnection</a></td>
<td>

List of stocks.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#stockfilterinput">StockFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shop</strong></td>
<td valign="top"><a href="#shop">Shop</a>!</td>
<td>

Return information about the shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZone</strong></td>
<td valign="top"><a href="#shippingzone">ShippingZone</a></td>
<td>

Look up a shipping zone by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the shipping zone.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZones</strong></td>
<td valign="top"><a href="#shippingzonecountableconnection">ShippingZoneCountableConnection</a></td>
<td>

List of the shop's shipping zones.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>digitalContent</strong></td>
<td valign="top"><a href="#digitalcontent">DigitalContent</a></td>
<td>

Look up digital content by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the digital content.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>digitalContents</strong></td>
<td valign="top"><a href="#digitalcontentcountableconnection">DigitalContentCountableConnection</a></td>
<td>

List of digital content.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top"><a href="#attributecountableconnection">AttributeCountableConnection</a></td>
<td>

List of the shop's attributes.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#attributefilterinput">AttributeFilterInput</a></td>
<td>

Filtering options for attributes.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#attributesortinginput">AttributeSortingInput</a></td>
<td>

Sorting options for attributes.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Look up an attribute by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top"><a href="#categorycountableconnection">CategoryCountableConnection</a></td>
<td>

List of the shop's categories.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#categoryfilterinput">CategoryFilterInput</a></td>
<td>

Filtering options for categories.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#categorysortinginput">CategorySortingInput</a></td>
<td>

Sort categories.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">level</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Filter categories by the nesting level in the category tree.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td>

Look up a category by ID or slug.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the category.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">slug</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Slug of the category

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>

Look up a collection by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">slug</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Slug of the category

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectioncountableconnection">CollectionCountableConnection</a></td>
<td>

List of the shop's collections.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#collectionfilterinput">CollectionFilterInput</a></td>
<td>

Filtering options for collections.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#collectionsortinginput">CollectionSortingInput</a></td>
<td>

Sort collections.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td>

Look up a product by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">slug</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Slug of the category

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top"><a href="#productcountableconnection">ProductCountableConnection</a></td>
<td>

List of the shop's products.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#productfilterinput">ProductFilterInput</a></td>
<td>

Filtering options for products.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#productorder">ProductOrder</a></td>
<td>

Sort products.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">stockAvailability</td>
<td valign="top"><a href="#stockavailability">StockAvailability</a></td>
<td>

[Deprecated] Filter products by stock availability. Use the `filter` field instead. This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td>

Look up a product type by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the product type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypes</strong></td>
<td valign="top"><a href="#producttypecountableconnection">ProductTypeCountableConnection</a></td>
<td>

List of the shop's product types.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#producttypefilterinput">ProductTypeFilterInput</a></td>
<td>

Filtering options for product types.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#producttypesortinginput">ProductTypeSortingInput</a></td>
<td>

Sort product types.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td>

Look up a product variant by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariants</strong></td>
<td valign="top"><a href="#productvariantcountableconnection">ProductVariantCountableConnection</a></td>
<td>

List of product variants.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Filter product variants by given IDs.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportProductSales</strong></td>
<td valign="top"><a href="#productvariantcountableconnection">ProductVariantCountableConnection</a></td>
<td>

List of top selling products.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">period</td>
<td valign="top"><a href="#reportingperiod">ReportingPeriod</a>!</td>
<td>

Span of time.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payment</strong></td>
<td valign="top"><a href="#payment">Payment</a></td>
<td>

Look up a payment by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payments</strong></td>
<td valign="top"><a href="#paymentcountableconnection">PaymentCountableConnection</a></td>
<td>

List of payments.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#page">Page</a></td>
<td>

Look up a page by ID or slug.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the page.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">slug</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The slug of the page.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pages</strong></td>
<td valign="top"><a href="#pagecountableconnection">PageCountableConnection</a></td>
<td>

List of the shop's pages.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#pagesortinginput">PageSortingInput</a></td>
<td>

Sort pages.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#pagefilterinput">PageFilterInput</a></td>
<td>

Filtering options for pages.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>homepageEvents</strong></td>
<td valign="top"><a href="#ordereventcountableconnection">OrderEventCountableConnection</a></td>
<td>

List of activity events to display on homepage (at the moment it only contains order-events).

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Look up an order by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orders</strong></td>
<td valign="top"><a href="#ordercountableconnection">OrderCountableConnection</a></td>
<td>

List of orders.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#ordersortinginput">OrderSortingInput</a></td>
<td>

Sort orders.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#orderfilterinput">OrderFilterInput</a></td>
<td>

Filtering options for orders.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">created</td>
<td valign="top"><a href="#reportingperiod">ReportingPeriod</a></td>
<td>

[Deprecated] Filter orders from a selected timespan. Use the `filter` field instead. This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top"><a href="#orderstatusfilter">OrderStatusFilter</a></td>
<td>

[Deprecated] Filter order by status. Use the `filter` field instead. This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrders</strong></td>
<td valign="top"><a href="#ordercountableconnection">OrderCountableConnection</a></td>
<td>

List of draft orders.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#ordersortinginput">OrderSortingInput</a></td>
<td>

Sort draft orders.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#orderdraftfilterinput">OrderDraftFilterInput</a></td>
<td>

Filtering options for draft orders.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">created</td>
<td valign="top"><a href="#reportingperiod">ReportingPeriod</a></td>
<td>

[Deprecated] Filter draft orders from a selected timespan. Use the `filter` field instead. This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ordersTotal</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

Return the total sales amount from a specific period.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">period</td>
<td valign="top"><a href="#reportingperiod">ReportingPeriod</a></td>
<td>

A period of time.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderByToken</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Look up an order by token.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>

The order's token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menu</strong></td>
<td valign="top"><a href="#menu">Menu</a></td>
<td>

Look up a navigation menu by ID or name.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the menu.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The menu's name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menus</strong></td>
<td valign="top"><a href="#menucountableconnection">MenuCountableConnection</a></td>
<td>

List of the storefront's menus.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#menusortinginput">MenuSortingInput</a></td>
<td>

Sort menus.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#menufilterinput">MenuFilterInput</a></td>
<td>

Filtering options for menus.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItem</strong></td>
<td valign="top"><a href="#menuitem">MenuItem</a></td>
<td>

Look up a menu item by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the menu item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItems</strong></td>
<td valign="top"><a href="#menuitemcountableconnection">MenuItemCountableConnection</a></td>
<td>

List of the storefronts's menu items.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#menuitemsortinginput">MenuItemSortingInput</a></td>
<td>

Sort menus items.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#menuitemfilterinput">MenuItemFilterInput</a></td>
<td>

Filtering options for menu items.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCard</strong></td>
<td valign="top"><a href="#giftcard">GiftCard</a></td>
<td>

Look up a gift card by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the gift card.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCards</strong></td>
<td valign="top"><a href="#giftcardcountableconnection">GiftCardCountableConnection</a></td>
<td>

List of gift cards.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>plugin</strong></td>
<td valign="top"><a href="#plugin">Plugin</a></td>
<td>

Look up a plugin by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the plugin.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>plugins</strong></td>
<td valign="top"><a href="#plugincountableconnection">PluginCountableConnection</a></td>
<td>

List of plugins.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#pluginfilterinput">PluginFilterInput</a></td>
<td>

Filtering options for plugins.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#pluginsortinginput">PluginSortingInput</a></td>
<td>

Sort plugins.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sale</strong></td>
<td valign="top"><a href="#sale">Sale</a></td>
<td>

Look up a sale by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the sale.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sales</strong></td>
<td valign="top"><a href="#salecountableconnection">SaleCountableConnection</a></td>
<td>

List of the shop's sales.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#salefilterinput">SaleFilterInput</a></td>
<td>

Filtering options for sales.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#salesortinginput">SaleSortingInput</a></td>
<td>

Sort sales.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Search sales by name, value or type.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#voucher">Voucher</a></td>
<td>

Look up a voucher by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>vouchers</strong></td>
<td valign="top"><a href="#vouchercountableconnection">VoucherCountableConnection</a></td>
<td>

List of the shop's vouchers.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#voucherfilterinput">VoucherFilterInput</a></td>
<td>

Filtering options for vouchers.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#vouchersortinginput">VoucherSortingInput</a></td>
<td>

Sort voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Search vouchers by name or code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exportFile</strong></td>
<td valign="top"><a href="#exportfile">ExportFile</a></td>
<td>

Look up a export file by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the export file job.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exportFiles</strong></td>
<td valign="top"><a href="#exportfilecountableconnection">ExportFileCountableConnection</a></td>
<td>

List of export files.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#exportfilefilterinput">ExportFileFilterInput</a></td>
<td>

Filtering options for export files.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#exportfilesortinginput">ExportFileSortingInput</a></td>
<td>

Sort export files.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxTypes</strong></td>
<td valign="top">[<a href="#taxtype">TaxType</a>]</td>
<td>

List of all tax rates available from tax gateway.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

Look up a checkout by token.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#uuid">UUID</a></td>
<td>

The checkout's token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkouts</strong></td>
<td valign="top"><a href="#checkoutcountableconnection">CheckoutCountableConnection</a></td>
<td>

List of checkouts.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutLine</strong></td>
<td valign="top"><a href="#checkoutline">CheckoutLine</a></td>
<td>

Look up a checkout line by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the checkout line.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutLines</strong></td>
<td valign="top"><a href="#checkoutlinecountableconnection">CheckoutLineCountableConnection</a></td>
<td>

List of checkout lines.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appsInstallations</strong></td>
<td valign="top">[<a href="#appinstallation">AppInstallation</a>!]!</td>
<td>

List of all apps installations

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>apps</strong></td>
<td valign="top"><a href="#appcountableconnection">AppCountableConnection</a></td>
<td>

List of the apps.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#appfilterinput">AppFilterInput</a></td>
<td>

Filtering options for apps.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#appsortinginput">AppSortingInput</a></td>
<td>

Sort apps.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#app">App</a></td>
<td>

Look up a app by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressValidationRules</strong></td>
<td valign="top"><a href="#addressvalidationdata">AddressValidationData</a></td>
<td>

Returns address validation rules.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countryCode</td>
<td valign="top"><a href="#countrycode">CountryCode</a>!</td>
<td>

Two-letter ISO 3166-1 country code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countryArea</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Designation of a region, province or state.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">city</td>
<td valign="top"><a href="#string">String</a></td>
<td>

City or a town name.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cityArea</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Sublocality like a district.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td>

Look up an address by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customers</strong></td>
<td valign="top"><a href="#usercountableconnection">UserCountableConnection</a></td>
<td>

List of the shop's customers.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#customerfilterinput">CustomerFilterInput</a></td>
<td>

Filtering options for customers.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#usersortinginput">UserSortingInput</a></td>
<td>

Sort customers.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissionGroups</strong></td>
<td valign="top"><a href="#groupcountableconnection">GroupCountableConnection</a></td>
<td>

List of permission groups.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#permissiongroupfilterinput">PermissionGroupFilterInput</a></td>
<td>

Filtering options for permission groups.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#permissiongroupsortinginput">PermissionGroupSortingInput</a></td>
<td>

Sort permission groups.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissionGroup</strong></td>
<td valign="top"><a href="#group">Group</a></td>
<td>

Look up permission group by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>me</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Return the currently authenticated user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffUsers</strong></td>
<td valign="top"><a href="#usercountableconnection">UserCountableConnection</a></td>
<td>

List of the shop's staff users.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#staffuserinput">StaffUserInput</a></td>
<td>

Filtering options for staff users.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#usersortinginput">UserSortingInput</a></td>
<td>

Sort staff users.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccounts</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccountcountableconnection">ServiceAccountCountableConnection</a></td>
<td>

List of the service accounts.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `apps` query instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#serviceaccountfilterinput">ServiceAccountFilterInput</a></td>
<td>

Filtering options for service accounts.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#serviceaccountsortinginput">ServiceAccountSortingInput</a></td>
<td>

Sort service accounts.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccount">ServiceAccount</a></td>
<td>

Look up a service account by ID.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `app` query instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the service account.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Look up a user by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>_entities</strong></td>
<td valign="top">[<a href="#_entity">_Entity</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">representations</td>
<td valign="top">[<a href="#_any">_Any</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>_service</strong></td>
<td valign="top"><a href="#_service">_Service</a></td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>webhookCreate</strong></td>
<td valign="top"><a href="#webhookcreate">WebhookCreate</a></td>
<td>

Creates a new webhook subscription.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#webhookcreateinput">WebhookCreateInput</a>!</td>
<td>

Fields required to create a webhook.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhookDelete</strong></td>
<td valign="top"><a href="#webhookdelete">WebhookDelete</a></td>
<td>

Deletes a webhook subscription.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a webhook to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhookUpdate</strong></td>
<td valign="top"><a href="#webhookupdate">WebhookUpdate</a></td>
<td>

Updates a webhook subscription.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a webhook to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#webhookupdateinput">WebhookUpdateInput</a>!</td>
<td>

Fields required to update a webhook.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createWarehouse</strong></td>
<td valign="top"><a href="#warehousecreate">WarehouseCreate</a></td>
<td>

Creates new warehouse.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#warehousecreateinput">WarehouseCreateInput</a>!</td>
<td>

Fields required to create warehouse.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateWarehouse</strong></td>
<td valign="top"><a href="#warehouseupdate">WarehouseUpdate</a></td>
<td>

Updates given warehouse.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a warehouse to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#warehouseupdateinput">WarehouseUpdateInput</a>!</td>
<td>

Fields required to update warehouse.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteWarehouse</strong></td>
<td valign="top"><a href="#warehousedelete">WarehouseDelete</a></td>
<td>

Deletes selected warehouse.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a warehouse to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assignWarehouseShippingZone</strong></td>
<td valign="top"><a href="#warehouseshippingzoneassign">WarehouseShippingZoneAssign</a></td>
<td>

Add shipping zone to given warehouse.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a warehouse to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">shippingZoneIds</td>
<td valign="top">[<a href="#id">ID</a>!]!</td>
<td>

List of shipping zone IDs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>unassignWarehouseShippingZone</strong></td>
<td valign="top"><a href="#warehouseshippingzoneunassign">WarehouseShippingZoneUnassign</a></td>
<td>

Remove shipping zone from given warehouse.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a warehouse to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">shippingZoneIds</td>
<td valign="top">[<a href="#id">ID</a>!]!</td>
<td>

List of shipping zone IDs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authorizationKeyAdd</strong></td>
<td valign="top"><a href="#authorizationkeyadd">AuthorizationKeyAdd</a></td>
<td>

Adds an authorization key.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#authorizationkeyinput">AuthorizationKeyInput</a>!</td>
<td>

Fields required to create an authorization key.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyType</td>
<td valign="top"><a href="#authorizationkeytype">AuthorizationKeyType</a>!</td>
<td>

Type of an authorization key to add.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authorizationKeyDelete</strong></td>
<td valign="top"><a href="#authorizationkeydelete">AuthorizationKeyDelete</a></td>
<td>

Deletes an authorization key.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyType</td>
<td valign="top"><a href="#authorizationkeytype">AuthorizationKeyType</a>!</td>
<td>

Type of a key to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffNotificationRecipientCreate</strong></td>
<td valign="top"><a href="#staffnotificationrecipientcreate">StaffNotificationRecipientCreate</a></td>
<td>

Creates a new staff notification recipient.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#staffnotificationrecipientinput">StaffNotificationRecipientInput</a>!</td>
<td>

Fields required to create a staff notification recipient.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffNotificationRecipientUpdate</strong></td>
<td valign="top"><a href="#staffnotificationrecipientupdate">StaffNotificationRecipientUpdate</a></td>
<td>

Updates a staff notification recipient.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a staff notification recipient to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#staffnotificationrecipientinput">StaffNotificationRecipientInput</a>!</td>
<td>

Fields required to update a staff notification recipient.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffNotificationRecipientDelete</strong></td>
<td valign="top"><a href="#staffnotificationrecipientdelete">StaffNotificationRecipientDelete</a></td>
<td>

Delete staff notification recipient.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a staff notification recipient to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>homepageCollectionUpdate</strong></td>
<td valign="top"><a href="#homepagecollectionupdate">HomepageCollectionUpdate</a></td>
<td>

Updates homepage collection of the shop.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Collection displayed on homepage.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopDomainUpdate</strong></td>
<td valign="top"><a href="#shopdomainupdate">ShopDomainUpdate</a></td>
<td>

Updates site domain of the shop.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#sitedomaininput">SiteDomainInput</a></td>
<td>

Fields required to update site.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopSettingsUpdate</strong></td>
<td valign="top"><a href="#shopsettingsupdate">ShopSettingsUpdate</a></td>
<td>

Updates shop settings.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#shopsettingsinput">ShopSettingsInput</a>!</td>
<td>

Fields required to update shop settings.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopFetchTaxRates</strong></td>
<td valign="top"><a href="#shopfetchtaxrates">ShopFetchTaxRates</a></td>
<td>

Fetch tax rates.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopSettingsTranslate</strong></td>
<td valign="top"><a href="#shopsettingstranslate">ShopSettingsTranslate</a></td>
<td>

Creates/Updates translations for Shop Settings.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#shopsettingstranslationinput">ShopSettingsTranslationInput</a>!</td>
<td>

Fields required to update shop settings translations.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopAddressUpdate</strong></td>
<td valign="top"><a href="#shopaddressupdate">ShopAddressUpdate</a></td>
<td>

Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Fields required to update shop address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingPriceCreate</strong></td>
<td valign="top"><a href="#shippingpricecreate">ShippingPriceCreate</a></td>
<td>

Creates a new shipping price.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#shippingpriceinput">ShippingPriceInput</a>!</td>
<td>

Fields required to create a shipping price.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingPriceDelete</strong></td>
<td valign="top"><a href="#shippingpricedelete">ShippingPriceDelete</a></td>
<td>

Deletes a shipping price.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a shipping price to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingPriceBulkDelete</strong></td>
<td valign="top"><a href="#shippingpricebulkdelete">ShippingPriceBulkDelete</a></td>
<td>

Deletes shipping prices.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of shipping price IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingPriceUpdate</strong></td>
<td valign="top"><a href="#shippingpriceupdate">ShippingPriceUpdate</a></td>
<td>

Updates a new shipping price.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a shipping price to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#shippingpriceinput">ShippingPriceInput</a>!</td>
<td>

Fields required to update a shipping price.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingPriceTranslate</strong></td>
<td valign="top"><a href="#shippingpricetranslate">ShippingPriceTranslate</a></td>
<td>

Creates/Updates translations for shipping method.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Shipping method ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#nametranslationinput">NameTranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZoneCreate</strong></td>
<td valign="top"><a href="#shippingzonecreate">ShippingZoneCreate</a></td>
<td>

Creates a new shipping zone.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#shippingzonecreateinput">ShippingZoneCreateInput</a>!</td>
<td>

Fields required to create a shipping zone.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZoneDelete</strong></td>
<td valign="top"><a href="#shippingzonedelete">ShippingZoneDelete</a></td>
<td>

Deletes a shipping zone.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a shipping zone to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZoneBulkDelete</strong></td>
<td valign="top"><a href="#shippingzonebulkdelete">ShippingZoneBulkDelete</a></td>
<td>

Deletes shipping zones.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of shipping zone IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZoneUpdate</strong></td>
<td valign="top"><a href="#shippingzoneupdate">ShippingZoneUpdate</a></td>
<td>

Updates a new shipping zone.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a shipping zone to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#shippingzoneupdateinput">ShippingZoneUpdateInput</a>!</td>
<td>

Fields required to update a shipping zone.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeCreate</strong></td>
<td valign="top"><a href="#attributecreate">AttributeCreate</a></td>
<td>

Creates an attribute.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#attributecreateinput">AttributeCreateInput</a>!</td>
<td>

Fields required to create an attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeDelete</strong></td>
<td valign="top"><a href="#attributedelete">AttributeDelete</a></td>
<td>

Deletes an attribute.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an attribute to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeBulkDelete</strong></td>
<td valign="top"><a href="#attributebulkdelete">AttributeBulkDelete</a></td>
<td>

Deletes attributes.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of attribute IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeAssign</strong></td>
<td valign="top"><a href="#attributeassign">AttributeAssign</a></td>
<td>

Assign attributes to a given product type.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">operations</td>
<td valign="top">[<a href="#attributeassigninput">AttributeAssignInput</a>]!</td>
<td>

The operations to perform.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productTypeId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the product type to assign the attributes into.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeUnassign</strong></td>
<td valign="top"><a href="#attributeunassign">AttributeUnassign</a></td>
<td>

Un-assign attributes from a given product type.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attributeIds</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

The IDs of the attributes to assign.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productTypeId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the product type to assign the attributes into.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeUpdate</strong></td>
<td valign="top"><a href="#attributeupdate">AttributeUpdate</a></td>
<td>

Updates attribute.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an attribute to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#attributeupdateinput">AttributeUpdateInput</a>!</td>
<td>

Fields required to update an attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeTranslate</strong></td>
<td valign="top"><a href="#attributetranslate">AttributeTranslate</a></td>
<td>

Creates/Updates translations for attribute.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Attribute ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#nametranslationinput">NameTranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeUpdateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#attributeupdatemeta">AttributeUpdateMeta</a></td>
<td>

Update public metadata for attribute.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeClearMetadata</strong> ⚠️</td>
<td valign="top"><a href="#attributeclearmeta">AttributeClearMeta</a></td>
<td>

Clears public metadata item for attribute.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeUpdatePrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#attributeupdateprivatemeta">AttributeUpdatePrivateMeta</a></td>
<td>

Update public metadata for attribute.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeClearPrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#attributeclearprivatemeta">AttributeClearPrivateMeta</a></td>
<td>

Clears public metadata item for attribute.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValueCreate</strong></td>
<td valign="top"><a href="#attributevaluecreate">AttributeValueCreate</a></td>
<td>

Creates a value for an attribute.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attribute</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Attribute to which value will be assigned.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#attributevaluecreateinput">AttributeValueCreateInput</a>!</td>
<td>

Fields required to create an AttributeValue.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValueDelete</strong></td>
<td valign="top"><a href="#attributevaluedelete">AttributeValueDelete</a></td>
<td>

Deletes a value of an attribute.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a value to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValueBulkDelete</strong></td>
<td valign="top"><a href="#attributevaluebulkdelete">AttributeValueBulkDelete</a></td>
<td>

Deletes values of attributes.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of attribute value IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValueUpdate</strong></td>
<td valign="top"><a href="#attributevalueupdate">AttributeValueUpdate</a></td>
<td>

Updates value of an attribute.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an AttributeValue to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#attributevaluecreateinput">AttributeValueCreateInput</a>!</td>
<td>

Fields required to update an AttributeValue.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValueTranslate</strong></td>
<td valign="top"><a href="#attributevaluetranslate">AttributeValueTranslate</a></td>
<td>

Creates/Updates translations for attribute value.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Attribute Value ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#nametranslationinput">NameTranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeReorderValues</strong></td>
<td valign="top"><a href="#attributereordervalues">AttributeReorderValues</a></td>
<td>

Reorder the values of an attribute.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">attributeId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an attribute.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">moves</td>
<td valign="top">[<a href="#reorderinput">ReorderInput</a>]!</td>
<td>

The list of reordering operations for given attribute values.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoryCreate</strong></td>
<td valign="top"><a href="#categorycreate">CategoryCreate</a></td>
<td>

Creates a new category.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#categoryinput">CategoryInput</a>!</td>
<td>

Fields required to create a category.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">parent</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the parent category. If empty, category will be top level category.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoryDelete</strong></td>
<td valign="top"><a href="#categorydelete">CategoryDelete</a></td>
<td>

Deletes a category.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a category to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoryBulkDelete</strong></td>
<td valign="top"><a href="#categorybulkdelete">CategoryBulkDelete</a></td>
<td>

Deletes categories.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of category IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoryUpdate</strong></td>
<td valign="top"><a href="#categoryupdate">CategoryUpdate</a></td>
<td>

Updates a category.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a category to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#categoryinput">CategoryInput</a>!</td>
<td>

Fields required to update a category.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoryTranslate</strong></td>
<td valign="top"><a href="#categorytranslate">CategoryTranslate</a></td>
<td>

Creates/Updates translations for Category.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Category ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#translationinput">TranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoryUpdateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#categoryupdatemeta">CategoryUpdateMeta</a></td>
<td>

Update public metadata for category.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoryClearMetadata</strong> ⚠️</td>
<td valign="top"><a href="#categoryclearmeta">CategoryClearMeta</a></td>
<td>

Clears public metadata for category.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoryUpdatePrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#categoryupdateprivatemeta">CategoryUpdatePrivateMeta</a></td>
<td>

Update private metadata for category.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoryClearPrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#categoryclearprivatemeta">CategoryClearPrivateMeta</a></td>
<td>

Clears private metadata for category.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionAddProducts</strong></td>
<td valign="top"><a href="#collectionaddproducts">CollectionAddProducts</a></td>
<td>

Adds products to a collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collectionId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">products</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of product IDs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionCreate</strong></td>
<td valign="top"><a href="#collectioncreate">CollectionCreate</a></td>
<td>

Creates a new collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#collectioncreateinput">CollectionCreateInput</a>!</td>
<td>

Fields required to create a collection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionDelete</strong></td>
<td valign="top"><a href="#collectiondelete">CollectionDelete</a></td>
<td>

Deletes a collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a collection to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionReorderProducts</strong></td>
<td valign="top"><a href="#collectionreorderproducts">CollectionReorderProducts</a></td>
<td>

Reorder the products of a collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collectionId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">moves</td>
<td valign="top">[<a href="#moveproductinput">MoveProductInput</a>]!</td>
<td>

The collection products position operations.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionBulkDelete</strong></td>
<td valign="top"><a href="#collectionbulkdelete">CollectionBulkDelete</a></td>
<td>

Deletes collections.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of collection IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionBulkPublish</strong></td>
<td valign="top"><a href="#collectionbulkpublish">CollectionBulkPublish</a></td>
<td>

Publish collections.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of collections IDs to (un)publish.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isPublished</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Determine if collections will be published or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionRemoveProducts</strong></td>
<td valign="top"><a href="#collectionremoveproducts">CollectionRemoveProducts</a></td>
<td>

Remove products from a collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collectionId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">products</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of product IDs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionUpdate</strong></td>
<td valign="top"><a href="#collectionupdate">CollectionUpdate</a></td>
<td>

Updates a collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a collection to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#collectioninput">CollectionInput</a>!</td>
<td>

Fields required to update a collection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionTranslate</strong></td>
<td valign="top"><a href="#collectiontranslate">CollectionTranslate</a></td>
<td>

Creates/Updates translations for collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Collection ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#translationinput">TranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionUpdateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#collectionupdatemeta">CollectionUpdateMeta</a></td>
<td>

Update public metadata for collection.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionClearMetadata</strong> ⚠️</td>
<td valign="top"><a href="#collectionclearmeta">CollectionClearMeta</a></td>
<td>

Clears public metadata for collection.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionUpdatePrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#collectionupdateprivatemeta">CollectionUpdatePrivateMeta</a></td>
<td>

Update private metadata for collection.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collectionClearPrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#collectionclearprivatemeta">CollectionClearPrivateMeta</a></td>
<td>

Clears private metadata item for collection.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productCreate</strong></td>
<td valign="top"><a href="#productcreate">ProductCreate</a></td>
<td>

Creates a new product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#productcreateinput">ProductCreateInput</a>!</td>
<td>

Fields required to create a product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productDelete</strong></td>
<td valign="top"><a href="#productdelete">ProductDelete</a></td>
<td>

Deletes a product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productBulkDelete</strong></td>
<td valign="top"><a href="#productbulkdelete">ProductBulkDelete</a></td>
<td>

Deletes products.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of product IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productBulkPublish</strong></td>
<td valign="top"><a href="#productbulkpublish">ProductBulkPublish</a></td>
<td>

Publish products.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of products IDs to publish.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isPublished</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Determine if products will be published or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productUpdate</strong></td>
<td valign="top"><a href="#productupdate">ProductUpdate</a></td>
<td>

Updates an existing product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#productinput">ProductInput</a>!</td>
<td>

Fields required to update a product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTranslate</strong></td>
<td valign="top"><a href="#producttranslate">ProductTranslate</a></td>
<td>

Creates/Updates translations for Product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Product ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#translationinput">TranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productUpdateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#productupdatemeta">ProductUpdateMeta</a></td>
<td>

Update public metadata for product.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productClearMetadata</strong> ⚠️</td>
<td valign="top"><a href="#productclearmeta">ProductClearMeta</a></td>
<td>

Clears public metadata item for product.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productUpdatePrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#productupdateprivatemeta">ProductUpdatePrivateMeta</a></td>
<td>

Update private metadata for product.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productClearPrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#productclearprivatemeta">ProductClearPrivateMeta</a></td>
<td>

Clears private metadata item for product.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productSetAvailabilityForPurchase</strong></td>
<td valign="top"><a href="#productsetavailabilityforpurchase">ProductSetAvailabilityForPurchase</a></td>
<td>

Set product availability for purchase date.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isAvailable</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Determine if product should be available for purchase.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Id of product that availability for purchase should be changed.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startDate</td>
<td valign="top"><a href="#date">Date</a></td>
<td>

A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productImageCreate</strong></td>
<td valign="top"><a href="#productimagecreate">ProductImageCreate</a></td>
<td>

Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#productimagecreateinput">ProductImageCreateInput</a>!</td>
<td>

Fields required to create a product image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantReorder</strong></td>
<td valign="top"><a href="#productvariantreorder">ProductVariantReorder</a></td>
<td>

Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">moves</td>
<td valign="top">[<a href="#reorderinput">ReorderInput</a>]!</td>
<td>

The list of variant reordering operations.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Id of product that variants order will be altered.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productImageDelete</strong></td>
<td valign="top"><a href="#productimagedelete">ProductImageDelete</a></td>
<td>

Deletes a product image.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product image to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productImageBulkDelete</strong></td>
<td valign="top"><a href="#productimagebulkdelete">ProductImageBulkDelete</a></td>
<td>

Deletes product images.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of product image IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productImageReorder</strong></td>
<td valign="top"><a href="#productimagereorder">ProductImageReorder</a></td>
<td>

Changes ordering of the product image.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">imagesIds</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

IDs of a product images in the desired order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Id of product that images order will be altered.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productImageUpdate</strong></td>
<td valign="top"><a href="#productimageupdate">ProductImageUpdate</a></td>
<td>

Updates a product image.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product image to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#productimageupdateinput">ProductImageUpdateInput</a>!</td>
<td>

Fields required to update a product image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypeCreate</strong></td>
<td valign="top"><a href="#producttypecreate">ProductTypeCreate</a></td>
<td>

Creates a new product type.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#producttypeinput">ProductTypeInput</a>!</td>
<td>

Fields required to create a product type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypeDelete</strong></td>
<td valign="top"><a href="#producttypedelete">ProductTypeDelete</a></td>
<td>

Deletes a product type.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product type to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypeBulkDelete</strong></td>
<td valign="top"><a href="#producttypebulkdelete">ProductTypeBulkDelete</a></td>
<td>

Deletes product types.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of product type IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypeUpdate</strong></td>
<td valign="top"><a href="#producttypeupdate">ProductTypeUpdate</a></td>
<td>

Updates an existing product type.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product type to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#producttypeinput">ProductTypeInput</a>!</td>
<td>

Fields required to update a product type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypeReorderAttributes</strong></td>
<td valign="top"><a href="#producttypereorderattributes">ProductTypeReorderAttributes</a></td>
<td>

Reorder the attributes of a product type.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">moves</td>
<td valign="top">[<a href="#reorderinput">ReorderInput</a>]!</td>
<td>

The list of attribute reordering operations.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productTypeId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product type.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#attributetypeenum">AttributeTypeEnum</a>!</td>
<td>

The attribute type to reorder.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypeUpdateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#producttypeupdatemeta">ProductTypeUpdateMeta</a></td>
<td>

Update public metadata for product type.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypeClearMetadata</strong> ⚠️</td>
<td valign="top"><a href="#producttypeclearmeta">ProductTypeClearMeta</a></td>
<td>

Clears public metadata for product type.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypeUpdatePrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#producttypeupdateprivatemeta">ProductTypeUpdatePrivateMeta</a></td>
<td>

Update private metadata for product type.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypeClearPrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#producttypeclearprivatemeta">ProductTypeClearPrivateMeta</a></td>
<td>

Clears private metadata for product type.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>digitalContentCreate</strong></td>
<td valign="top"><a href="#digitalcontentcreate">DigitalContentCreate</a></td>
<td>

Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#digitalcontentuploadinput">DigitalContentUploadInput</a>!</td>
<td>

Fields required to create a digital content.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variantId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product variant to upload digital content.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>digitalContentDelete</strong></td>
<td valign="top"><a href="#digitalcontentdelete">DigitalContentDelete</a></td>
<td>

Remove digital content assigned to given variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variantId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product variant with digital content to remove.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>digitalContentUpdate</strong></td>
<td valign="top"><a href="#digitalcontentupdate">DigitalContentUpdate</a></td>
<td>

Update digital content.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#digitalcontentinput">DigitalContentInput</a>!</td>
<td>

Fields required to update a digital content.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variantId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product variant with digital content to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>digitalContentUrlCreate</strong></td>
<td valign="top"><a href="#digitalcontenturlcreate">DigitalContentUrlCreate</a></td>
<td>

Generate new URL to digital content.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#digitalcontenturlcreateinput">DigitalContentUrlCreateInput</a>!</td>
<td>

Fields required to create a new url.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantCreate</strong></td>
<td valign="top"><a href="#productvariantcreate">ProductVariantCreate</a></td>
<td>

Creates a new variant for a product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#productvariantcreateinput">ProductVariantCreateInput</a>!</td>
<td>

Fields required to create a product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantDelete</strong></td>
<td valign="top"><a href="#productvariantdelete">ProductVariantDelete</a></td>
<td>

Deletes a product variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product variant to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantBulkCreate</strong></td>
<td valign="top"><a href="#productvariantbulkcreate">ProductVariantBulkCreate</a></td>
<td>

Creates product variants for a given product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">product</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the product to create the variants for.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variants</td>
<td valign="top">[<a href="#productvariantbulkcreateinput">ProductVariantBulkCreateInput</a>]!</td>
<td>

Input list of product variants to create.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantBulkDelete</strong></td>
<td valign="top"><a href="#productvariantbulkdelete">ProductVariantBulkDelete</a></td>
<td>

Deletes product variants.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of product variant IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantStocksCreate</strong></td>
<td valign="top"><a href="#productvariantstockscreate">ProductVariantStocksCreate</a></td>
<td>

Creates stocks for product variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">stocks</td>
<td valign="top">[<a href="#stockinput">StockInput</a>!]!</td>
<td>

Input list of stocks to create.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variantId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product variant for which stocks will be created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantStocksDelete</strong></td>
<td valign="top"><a href="#productvariantstocksdelete">ProductVariantStocksDelete</a></td>
<td>

Delete stocks from product variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variantId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of product variant for which stocks will be deleted.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">warehouseIds</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantStocksUpdate</strong></td>
<td valign="top"><a href="#productvariantstocksupdate">ProductVariantStocksUpdate</a></td>
<td>

Update stocks for product variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">stocks</td>
<td valign="top">[<a href="#stockinput">StockInput</a>!]!</td>
<td>

Input list of stocks to create.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variantId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product variant for which stocks will be created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantUpdate</strong></td>
<td valign="top"><a href="#productvariantupdate">ProductVariantUpdate</a></td>
<td>

Updates an existing variant for product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product variant to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#productvariantinput">ProductVariantInput</a>!</td>
<td>

Fields required to update a product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantSetDefault</strong></td>
<td valign="top"><a href="#productvariantsetdefault">ProductVariantSetDefault</a></td>
<td>

Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Id of a product that will have the default variant set.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variantId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Id of a variant that will be set as default.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantTranslate</strong></td>
<td valign="top"><a href="#productvarianttranslate">ProductVariantTranslate</a></td>
<td>

Creates/Updates translations for Product Variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Product Variant ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#nametranslationinput">NameTranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantUpdateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#productvariantupdatemeta">ProductVariantUpdateMeta</a></td>
<td>

Update public metadata for product variant.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantClearMetadata</strong> ⚠️</td>
<td valign="top"><a href="#productvariantclearmeta">ProductVariantClearMeta</a></td>
<td>

Clears public metadata for product variant.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantUpdatePrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#productvariantupdateprivatemeta">ProductVariantUpdatePrivateMeta</a></td>
<td>

Update private metadata for product variant.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantClearPrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#productvariantclearprivatemeta">ProductVariantClearPrivateMeta</a></td>
<td>

Clears private metadata for product variant.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variantImageAssign</strong></td>
<td valign="top"><a href="#variantimageassign">VariantImageAssign</a></td>
<td>

Assign an image to a product variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">imageId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product image to assign to a variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variantId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variantImageUnassign</strong></td>
<td valign="top"><a href="#variantimageunassign">VariantImageUnassign</a></td>
<td>

Unassign an image from a product variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">imageId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product image to unassign from a variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">variantId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentCapture</strong></td>
<td valign="top"><a href="#paymentcapture">PaymentCapture</a></td>
<td>

Captures the authorized payment amount.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">amount</td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Transaction amount.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">paymentId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Payment ID.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentRefund</strong></td>
<td valign="top"><a href="#paymentrefund">PaymentRefund</a></td>
<td>

Refunds the captured payment amount.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">amount</td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Transaction amount.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">paymentId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Payment ID.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentVoid</strong></td>
<td valign="top"><a href="#paymentvoid">PaymentVoid</a></td>
<td>

Voids the authorized payment.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">paymentId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Payment ID.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageCreate</strong></td>
<td valign="top"><a href="#pagecreate">PageCreate</a></td>
<td>

Creates a new page.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#pageinput">PageInput</a>!</td>
<td>

Fields required to create a page.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageDelete</strong></td>
<td valign="top"><a href="#pagedelete">PageDelete</a></td>
<td>

Deletes a page.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a page to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageBulkDelete</strong></td>
<td valign="top"><a href="#pagebulkdelete">PageBulkDelete</a></td>
<td>

Deletes pages.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of page IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageBulkPublish</strong></td>
<td valign="top"><a href="#pagebulkpublish">PageBulkPublish</a></td>
<td>

Publish pages.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of page IDs to (un)publish.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isPublished</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Determine if pages will be published or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageUpdate</strong></td>
<td valign="top"><a href="#pageupdate">PageUpdate</a></td>
<td>

Updates an existing page.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a page to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#pageinput">PageInput</a>!</td>
<td>

Fields required to update a page.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageTranslate</strong></td>
<td valign="top"><a href="#pagetranslate">PageTranslate</a></td>
<td>

Creates/Updates translations for Page.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Page ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#pagetranslationinput">PageTranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrderComplete</strong></td>
<td valign="top"><a href="#draftordercomplete">DraftOrderComplete</a></td>
<td>

Completes creating an order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order that will be completed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrderCreate</strong></td>
<td valign="top"><a href="#draftordercreate">DraftOrderCreate</a></td>
<td>

Creates a new draft order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#draftordercreateinput">DraftOrderCreateInput</a>!</td>
<td>

Fields required to create an order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrderDelete</strong></td>
<td valign="top"><a href="#draftorderdelete">DraftOrderDelete</a></td>
<td>

Deletes a draft order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a draft order to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrderBulkDelete</strong></td>
<td valign="top"><a href="#draftorderbulkdelete">DraftOrderBulkDelete</a></td>
<td>

Deletes draft orders.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of draft order IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrderLinesBulkDelete</strong></td>
<td valign="top"><a href="#draftorderlinesbulkdelete">DraftOrderLinesBulkDelete</a></td>
<td>

Deletes order lines.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of order lines IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrderLinesCreate</strong></td>
<td valign="top"><a href="#draftorderlinescreate">DraftOrderLinesCreate</a></td>
<td>

Create order lines for a draft order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the draft order to add the lines to.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#orderlinecreateinput">OrderLineCreateInput</a>]!</td>
<td>

Fields required to add order lines.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrderLineDelete</strong></td>
<td valign="top"><a href="#draftorderlinedelete">DraftOrderLineDelete</a></td>
<td>

Deletes an order line from a draft order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order line to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrderLineUpdate</strong></td>
<td valign="top"><a href="#draftorderlineupdate">DraftOrderLineUpdate</a></td>
<td>

Updates an order line of a draft order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order line to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#orderlineinput">OrderLineInput</a>!</td>
<td>

Fields required to update an order line.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draftOrderUpdate</strong></td>
<td valign="top"><a href="#draftorderupdate">DraftOrderUpdate</a></td>
<td>

Updates a draft order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an order to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#draftorderinput">DraftOrderInput</a>!</td>
<td>

Fields required to update an order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderAddNote</strong></td>
<td valign="top"><a href="#orderaddnote">OrderAddNote</a></td>
<td>

Adds note to the order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">order</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order to add a note for.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#orderaddnoteinput">OrderAddNoteInput</a>!</td>
<td>

Fields required to create a note for the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderCancel</strong></td>
<td valign="top"><a href="#ordercancel">OrderCancel</a></td>
<td>

Cancel an order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order to cancel.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderCapture</strong></td>
<td valign="top"><a href="#ordercapture">OrderCapture</a></td>
<td>

Capture an order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">amount</td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a>!</td>
<td>

Amount of money to capture.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order to capture.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderClearPrivateMeta</strong> ⚠️</td>
<td valign="top"><a href="#orderclearprivatemeta">OrderClearPrivateMeta</a></td>
<td>

Clears stored private metadata value.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderClearMeta</strong> ⚠️</td>
<td valign="top"><a href="#orderclearmeta">OrderClearMeta</a></td>
<td>

Clears stored metadata value.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>

Token of an object to clear.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderFulfill</strong></td>
<td valign="top"><a href="#orderfulfill">OrderFulfill</a></td>
<td>

Creates new fulfillments for an order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#orderfulfillinput">OrderFulfillInput</a>!</td>
<td>

Fields required to create an fulfillment.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">order</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the order to be fulfilled.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderFulfillmentCancel</strong></td>
<td valign="top"><a href="#fulfillmentcancel">FulfillmentCancel</a></td>
<td>

Cancels existing fulfillment and optionally restocks items.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an fulfillment to cancel.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#fulfillmentcancelinput">FulfillmentCancelInput</a>!</td>
<td>

Fields required to cancel an fulfillment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderFulfillmentUpdateTracking</strong></td>
<td valign="top"><a href="#fulfillmentupdatetracking">FulfillmentUpdateTracking</a></td>
<td>

Updates a fulfillment for an order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an fulfillment to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#fulfillmentupdatetrackinginput">FulfillmentUpdateTrackingInput</a>!</td>
<td>

Fields required to update an fulfillment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderFulfillmentClearMeta</strong> ⚠️</td>
<td valign="top"><a href="#fulfillmentclearmeta">FulfillmentClearMeta</a></td>
<td>

Clears metadata for fulfillment.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderFulfillmentClearPrivateMeta</strong> ⚠️</td>
<td valign="top"><a href="#fulfillmentclearprivatemeta">FulfillmentClearPrivateMeta</a></td>
<td>

Clears private metadata for fulfillment.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderFulfillmentUpdateMeta</strong> ⚠️</td>
<td valign="top"><a href="#fulfillmentupdatemeta">FulfillmentUpdateMeta</a></td>
<td>

Updates metadata for fulfillment.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderFulfillmentUpdatePrivateMeta</strong> ⚠️</td>
<td valign="top"><a href="#fulfillmentupdateprivatemeta">FulfillmentUpdatePrivateMeta</a></td>
<td>

Updates metadata for fulfillment.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderMarkAsPaid</strong></td>
<td valign="top"><a href="#ordermarkaspaid">OrderMarkAsPaid</a></td>
<td>

Mark order as manually paid.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order to mark paid.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderRefund</strong></td>
<td valign="top"><a href="#orderrefund">OrderRefund</a></td>
<td>

Refund an order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">amount</td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a>!</td>
<td>

Amount of money to refund.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order to refund.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderUpdate</strong></td>
<td valign="top"><a href="#orderupdate">OrderUpdate</a></td>
<td>

Updates an order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an order to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#orderupdateinput">OrderUpdateInput</a>!</td>
<td>

Fields required to update an order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderUpdateMeta</strong> ⚠️</td>
<td valign="top"><a href="#orderupdatemeta">OrderUpdateMeta</a></td>
<td>

Updates meta for order.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>

Token of an object to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderUpdatePrivateMeta</strong> ⚠️</td>
<td valign="top"><a href="#orderupdateprivatemeta">OrderUpdatePrivateMeta</a></td>
<td>

Updates private meta for order.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderUpdateShipping</strong></td>
<td valign="top"><a href="#orderupdateshipping">OrderUpdateShipping</a></td>
<td>

Updates a shipping method of the order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">order</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order to update a shipping method.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#orderupdateshippinginput">OrderUpdateShippingInput</a></td>
<td>

Fields required to change shipping method of the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderVoid</strong></td>
<td valign="top"><a href="#ordervoid">OrderVoid</a></td>
<td>

Void an order.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order to void.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderBulkCancel</strong></td>
<td valign="top"><a href="#orderbulkcancel">OrderBulkCancel</a></td>
<td>

Cancels orders.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of orders IDs to cancel.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMetadata</strong></td>
<td valign="top"><a href="#deletemetadata">DeleteMetadata</a></td>
<td>

Delete metadata of an object.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keys</td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Metadata keys to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deletePrivateMetadata</strong></td>
<td valign="top"><a href="#deleteprivatemetadata">DeletePrivateMetadata</a></td>
<td>

Delete object's private metadata.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keys</td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Metadata keys to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMetadata</strong></td>
<td valign="top"><a href="#updatemetadata">UpdateMetadata</a></td>
<td>

Updates metadata of an object.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#metadatainput">MetadataInput</a>!]!</td>
<td>

Fields required to update the object's metadata.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatePrivateMetadata</strong></td>
<td valign="top"><a href="#updateprivatemetadata">UpdatePrivateMetadata</a></td>
<td>

Updates private metadata of an object.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#metadatainput">MetadataInput</a>!]!</td>
<td>

Fields required to update the object's metadata.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assignNavigation</strong></td>
<td valign="top"><a href="#assignnavigation">AssignNavigation</a></td>
<td>

Assigns storefront's navigation menus.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">menu</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the menu.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">navigationType</td>
<td valign="top"><a href="#navigationtype">NavigationType</a>!</td>
<td>

Type of the navigation bar to assign the menu to.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuCreate</strong></td>
<td valign="top"><a href="#menucreate">MenuCreate</a></td>
<td>

Creates a new Menu.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#menucreateinput">MenuCreateInput</a>!</td>
<td>

Fields required to create a menu.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuDelete</strong></td>
<td valign="top"><a href="#menudelete">MenuDelete</a></td>
<td>

Deletes a menu.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a menu to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuBulkDelete</strong></td>
<td valign="top"><a href="#menubulkdelete">MenuBulkDelete</a></td>
<td>

Deletes menus.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of menu IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuUpdate</strong></td>
<td valign="top"><a href="#menuupdate">MenuUpdate</a></td>
<td>

Updates a menu.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a menu to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#menuinput">MenuInput</a>!</td>
<td>

Fields required to update a menu.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItemCreate</strong></td>
<td valign="top"><a href="#menuitemcreate">MenuItemCreate</a></td>
<td>

Creates a new menu item.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#menuitemcreateinput">MenuItemCreateInput</a>!</td>
<td>

Fields required to update a menu item. Only one of `url`, `category`, `page`, `collection` is allowed per item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItemDelete</strong></td>
<td valign="top"><a href="#menuitemdelete">MenuItemDelete</a></td>
<td>

Deletes a menu item.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a menu item to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItemBulkDelete</strong></td>
<td valign="top"><a href="#menuitembulkdelete">MenuItemBulkDelete</a></td>
<td>

Deletes menu items.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of menu item IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItemUpdate</strong></td>
<td valign="top"><a href="#menuitemupdate">MenuItemUpdate</a></td>
<td>

Updates a menu item.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a menu item to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#menuiteminput">MenuItemInput</a>!</td>
<td>

Fields required to update a menu item. Only one of `url`, `category`, `page`, `collection` is allowed per item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItemTranslate</strong></td>
<td valign="top"><a href="#menuitemtranslate">MenuItemTranslate</a></td>
<td>

Creates/Updates translations for Menu Item.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Menu Item ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#nametranslationinput">NameTranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItemMove</strong></td>
<td valign="top"><a href="#menuitemmove">MenuItemMove</a></td>
<td>

Moves items of menus.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">menu</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the menu.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">moves</td>
<td valign="top">[<a href="#menuitemmoveinput">MenuItemMoveInput</a>]!</td>
<td>

The menu position data.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceRequest</strong></td>
<td valign="top"><a href="#invoicerequest">InvoiceRequest</a></td>
<td>

Request an invoice for the order using plugin.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">number</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Invoice number, if not provided it will be generated.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order related to invoice.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceRequestDelete</strong></td>
<td valign="top"><a href="#invoicerequestdelete">InvoiceRequestDelete</a></td>
<td>

Requests deletion of an invoice.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an invoice to request the deletion.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceCreate</strong></td>
<td valign="top"><a href="#invoicecreate">InvoiceCreate</a></td>
<td>

Creates a ready to send invoice.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#invoicecreateinput">InvoiceCreateInput</a>!</td>
<td>

Fields required when creating an invoice.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the order related to invoice.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceDelete</strong></td>
<td valign="top"><a href="#invoicedelete">InvoiceDelete</a></td>
<td>

Deletes an invoice.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an invoice to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceUpdate</strong></td>
<td valign="top"><a href="#invoiceupdate">InvoiceUpdate</a></td>
<td>

Updates an invoice.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an invoice to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updateinvoiceinput">UpdateInvoiceInput</a>!</td>
<td>

Fields to use when updating an invoice.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceSendEmail</strong></td>
<td valign="top"><a href="#invoicesendemail">InvoiceSendEmail</a></td>
<td>

Send an invoice by email.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an invoice to be sent.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCardActivate</strong></td>
<td valign="top"><a href="#giftcardactivate">GiftCardActivate</a></td>
<td>

Activate a gift card.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a gift card to activate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCardCreate</strong></td>
<td valign="top"><a href="#giftcardcreate">GiftCardCreate</a></td>
<td>

Creates a new gift card.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#giftcardcreateinput">GiftCardCreateInput</a>!</td>
<td>

Fields required to create a gift card.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCardDeactivate</strong></td>
<td valign="top"><a href="#giftcarddeactivate">GiftCardDeactivate</a></td>
<td>

Deactivate a gift card.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a gift card to deactivate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCardUpdate</strong></td>
<td valign="top"><a href="#giftcardupdate">GiftCardUpdate</a></td>
<td>

Update a gift card.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a gift card to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#giftcardupdateinput">GiftCardUpdateInput</a>!</td>
<td>

Fields required to update a gift card.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pluginUpdate</strong></td>
<td valign="top"><a href="#pluginupdate">PluginUpdate</a></td>
<td>

Update plugin configuration.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of plugin to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#pluginupdateinput">PluginUpdateInput</a>!</td>
<td>

Fields required to update a plugin configuration.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>saleCreate</strong></td>
<td valign="top"><a href="#salecreate">SaleCreate</a></td>
<td>

Creates a new sale.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#saleinput">SaleInput</a>!</td>
<td>

Fields required to create a sale.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>saleDelete</strong></td>
<td valign="top"><a href="#saledelete">SaleDelete</a></td>
<td>

Deletes a sale.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a sale to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>saleBulkDelete</strong></td>
<td valign="top"><a href="#salebulkdelete">SaleBulkDelete</a></td>
<td>

Deletes sales.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of sale IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>saleUpdate</strong></td>
<td valign="top"><a href="#saleupdate">SaleUpdate</a></td>
<td>

Updates a sale.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a sale to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#saleinput">SaleInput</a>!</td>
<td>

Fields required to update a sale.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>saleCataloguesAdd</strong></td>
<td valign="top"><a href="#saleaddcatalogues">SaleAddCatalogues</a></td>
<td>

Adds products, categories, collections to a voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a sale.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#catalogueinput">CatalogueInput</a>!</td>
<td>

Fields required to modify catalogue IDs of sale.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>saleCataloguesRemove</strong></td>
<td valign="top"><a href="#saleremovecatalogues">SaleRemoveCatalogues</a></td>
<td>

Removes products, categories, collections from a sale.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a sale.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#catalogueinput">CatalogueInput</a>!</td>
<td>

Fields required to modify catalogue IDs of sale.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>saleTranslate</strong></td>
<td valign="top"><a href="#saletranslate">SaleTranslate</a></td>
<td>

Creates/updates translations for a sale.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Voucher ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#nametranslationinput">NameTranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucherCreate</strong></td>
<td valign="top"><a href="#vouchercreate">VoucherCreate</a></td>
<td>

Creates a new voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#voucherinput">VoucherInput</a>!</td>
<td>

Fields required to create a voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucherDelete</strong></td>
<td valign="top"><a href="#voucherdelete">VoucherDelete</a></td>
<td>

Deletes a voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a voucher to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucherBulkDelete</strong></td>
<td valign="top"><a href="#voucherbulkdelete">VoucherBulkDelete</a></td>
<td>

Deletes vouchers.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of voucher IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucherUpdate</strong></td>
<td valign="top"><a href="#voucherupdate">VoucherUpdate</a></td>
<td>

Updates a voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a voucher to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#voucherinput">VoucherInput</a>!</td>
<td>

Fields required to update a voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucherCataloguesAdd</strong></td>
<td valign="top"><a href="#voucheraddcatalogues">VoucherAddCatalogues</a></td>
<td>

Adds products, categories, collections to a voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#catalogueinput">CatalogueInput</a>!</td>
<td>

Fields required to modify catalogue IDs of voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucherCataloguesRemove</strong></td>
<td valign="top"><a href="#voucherremovecatalogues">VoucherRemoveCatalogues</a></td>
<td>

Removes products, categories, collections from a voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#catalogueinput">CatalogueInput</a>!</td>
<td>

Fields required to modify catalogue IDs of voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucherTranslate</strong></td>
<td valign="top"><a href="#vouchertranslate">VoucherTranslate</a></td>
<td>

Creates/Updates translations for Voucher.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Voucher ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#nametranslationinput">NameTranslationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

Translation language code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exportProducts</strong></td>
<td valign="top"><a href="#exportproducts">ExportProducts</a></td>
<td>

Export products to csv file.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#exportproductsinput">ExportProductsInput</a>!</td>
<td>

Fields required to export product data

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutAddPromoCode</strong></td>
<td valign="top"><a href="#checkoutaddpromocode">CheckoutAddPromoCode</a></td>
<td>

Adds a gift card or a voucher to a checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Checkout ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">promoCode</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Gift card code or voucher code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutBillingAddressUpdate</strong></td>
<td valign="top"><a href="#checkoutbillingaddressupdate">CheckoutBillingAddressUpdate</a></td>
<td>

Update billing address in the existing checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">billingAddress</td>
<td valign="top"><a href="#addressinput">AddressInput</a>!</td>
<td>

The billing address of the checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutComplete</strong></td>
<td valign="top"><a href="#checkoutcomplete">CheckoutComplete</a></td>
<td>

Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Checkout ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">paymentData</td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td>

Client-side generated data required to finalize the payment.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">redirectUrl</td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL of a view where users should be redirected to see the order details. URL in RFC 1808 format.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">storeSource</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines whether to store the payment source for future usage.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutCreate</strong></td>
<td valign="top"><a href="#checkoutcreate">CheckoutCreate</a></td>
<td>

Create a new checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#checkoutcreateinput">CheckoutCreateInput</a>!</td>
<td>

Fields required to create checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutCustomerAttach</strong></td>
<td valign="top"><a href="#checkoutcustomerattach">CheckoutCustomerAttach</a></td>
<td>

Sets the customer as the owner of the checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customerId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

[Deprecated] The ID of the customer. To identify a customer you should authenticate with JWT. This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutCustomerDetach</strong></td>
<td valign="top"><a href="#checkoutcustomerdetach">CheckoutCustomerDetach</a></td>
<td>

Removes the user assigned as the owner of the checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Checkout ID.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutEmailUpdate</strong></td>
<td valign="top"><a href="#checkoutemailupdate">CheckoutEmailUpdate</a></td>
<td>

Updates email address in the existing checkout object.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Checkout ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

email.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutLineDelete</strong></td>
<td valign="top"><a href="#checkoutlinedelete">CheckoutLineDelete</a></td>
<td>

Deletes a CheckoutLine.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">lineId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the checkout line to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutLinesAdd</strong></td>
<td valign="top"><a href="#checkoutlinesadd">CheckoutLinesAdd</a></td>
<td>

Adds a checkout line to the existing checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">lines</td>
<td valign="top">[<a href="#checkoutlineinput">CheckoutLineInput</a>]!</td>
<td>

A list of checkout lines, each containing information about an item in the checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutLinesUpdate</strong></td>
<td valign="top"><a href="#checkoutlinesupdate">CheckoutLinesUpdate</a></td>
<td>

Updates checkout line in the existing checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">lines</td>
<td valign="top">[<a href="#checkoutlineinput">CheckoutLineInput</a>]!</td>
<td>

A list of checkout lines, each containing information about an item in the checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutRemovePromoCode</strong></td>
<td valign="top"><a href="#checkoutremovepromocode">CheckoutRemovePromoCode</a></td>
<td>

Remove a gift card or a voucher from a checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Checkout ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">promoCode</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Gift card code or voucher code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutPaymentCreate</strong></td>
<td valign="top"><a href="#checkoutpaymentcreate">CheckoutPaymentCreate</a></td>
<td>

Create a new payment for given checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Checkout ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#paymentinput">PaymentInput</a>!</td>
<td>

Data required to create a new payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutShippingAddressUpdate</strong></td>
<td valign="top"><a href="#checkoutshippingaddressupdate">CheckoutShippingAddressUpdate</a></td>
<td>

Update shipping address in the existing checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">shippingAddress</td>
<td valign="top"><a href="#addressinput">AddressInput</a>!</td>
<td>

The mailing address to where the checkout will be shipped.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutShippingMethodUpdate</strong></td>
<td valign="top"><a href="#checkoutshippingmethodupdate">CheckoutShippingMethodUpdate</a></td>
<td>

Updates the shipping address of the checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">checkoutId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Checkout ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">shippingMethodId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutUpdateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#checkoutupdatemeta">CheckoutUpdateMeta</a></td>
<td>

Updates metadata for checkout.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutClearMetadata</strong> ⚠️</td>
<td valign="top"><a href="#checkoutclearmeta">CheckoutClearMeta</a></td>
<td>

Clear metadata for checkout.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutUpdatePrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#checkoutupdateprivatemeta">CheckoutUpdatePrivateMeta</a></td>
<td>

Updates private metadata for checkout.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutClearPrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#checkoutclearprivatemeta">CheckoutClearPrivateMeta</a></td>
<td>

Clear private metadata for checkout.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appCreate</strong></td>
<td valign="top"><a href="#appcreate">AppCreate</a></td>
<td>

Creates a new app.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#appinput">AppInput</a>!</td>
<td>

Fields required to create a new app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appUpdate</strong></td>
<td valign="top"><a href="#appupdate">AppUpdate</a></td>
<td>

Updates an existing app.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an app to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#appinput">AppInput</a>!</td>
<td>

Fields required to update an existing app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appDelete</strong></td>
<td valign="top"><a href="#appdelete">AppDelete</a></td>
<td>

Deletes an app.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an app to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appTokenCreate</strong></td>
<td valign="top"><a href="#apptokencreate">AppTokenCreate</a></td>
<td>

Creates a new token.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#apptokeninput">AppTokenInput</a>!</td>
<td>

Fields required to create a new auth token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appTokenDelete</strong></td>
<td valign="top"><a href="#apptokendelete">AppTokenDelete</a></td>
<td>

Deletes an authentication token assigned to app.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an auth token to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appTokenVerify</strong></td>
<td valign="top"><a href="#apptokenverify">AppTokenVerify</a></td>
<td>

Verify provided app token.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

App token to verify.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appInstall</strong></td>
<td valign="top"><a href="#appinstall">AppInstall</a></td>
<td>

Install new app by using app manifest.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#appinstallinput">AppInstallInput</a>!</td>
<td>

Fields required to install a new app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appRetryInstall</strong></td>
<td valign="top"><a href="#appretryinstall">AppRetryInstall</a></td>
<td>

Retry failed installation of new app.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">activateAfterInstallation</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determine if app will be set active or not.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of failed installation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appDeleteFailedInstallation</strong></td>
<td valign="top"><a href="#appdeletefailedinstallation">AppDeleteFailedInstallation</a></td>
<td>

Delete failed installation.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of failed installation to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appFetchManifest</strong></td>
<td valign="top"><a href="#appfetchmanifest">AppFetchManifest</a></td>
<td>

Fetch and validate manifest.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">manifestUrl</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appActivate</strong></td>
<td valign="top"><a href="#appactivate">AppActivate</a></td>
<td>

Activate the app.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of app to activate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appDeactivate</strong></td>
<td valign="top"><a href="#appdeactivate">AppDeactivate</a></td>
<td>

Deactivate the app.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of app to deactivate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokenCreate</strong></td>
<td valign="top"><a href="#createtoken">CreateToken</a></td>
<td>

Create JWT token.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email of a user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Password of a user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokenRefresh</strong></td>
<td valign="top"><a href="#refreshtoken">RefreshToken</a></td>
<td>

Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">csrfToken</td>
<td valign="top"><a href="#string">String</a></td>
<td>

CSRF token required to refresh token. This argument is required when refreshToken is provided as a cookie.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">refreshToken</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Refresh token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokenVerify</strong></td>
<td valign="top"><a href="#verifytoken">VerifyToken</a></td>
<td>

Verify JWT token.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

JWT token to validate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokensDeactivateAll</strong></td>
<td valign="top"><a href="#deactivateallusertokens">DeactivateAllUserTokens</a></td>
<td>

Deactivate all JWT tokens of the currently authenticated user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestPasswordReset</strong></td>
<td valign="top"><a href="#requestpasswordreset">RequestPasswordReset</a></td>
<td>

Sends an email with the account password modification link.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email of the user that will be used for password recovery.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">redirectUrl</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

URL of a view where users should be redirected to reset the password. URL in RFC 1808 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>confirmAccount</strong></td>
<td valign="top"><a href="#confirmaccount">ConfirmAccount</a></td>
<td>

Confirm user account with token sent by email during registration.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

E-mail of the user performing account confirmation.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A one-time token required to confirm the account.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>setPassword</strong></td>
<td valign="top"><a href="#setpassword">SetPassword</a></td>
<td>

Sets the user's password from the token sent by email using the RequestPasswordReset mutation.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email of a user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Password of a user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A one-time token required to set the password.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>passwordChange</strong></td>
<td valign="top"><a href="#passwordchange">PasswordChange</a></td>
<td>

Change the password of the logged in user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">newPassword</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

New user password.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">oldPassword</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Current user password.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestEmailChange</strong></td>
<td valign="top"><a href="#requestemailchange">RequestEmailChange</a></td>
<td>

Request email change of the logged in user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">newEmail</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

New user email.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User password.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">redirectUrl</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

URL of a view where users should be redirected to update the email address. URL in RFC 1808 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>confirmEmailChange</strong></td>
<td valign="top"><a href="#confirmemailchange">ConfirmEmailChange</a></td>
<td>

Confirm the email change of the logged-in user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A one-time token required to change the email.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountAddressCreate</strong></td>
<td valign="top"><a href="#accountaddresscreate">AccountAddressCreate</a></td>
<td>

Create a new address for the customer.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#addressinput">AddressInput</a>!</td>
<td>

Fields required to create address.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#addresstypeenum">AddressTypeEnum</a></td>
<td>

A type of address. If provided, the new address will be automatically assigned as the customer's default address of that type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountAddressUpdate</strong></td>
<td valign="top"><a href="#accountaddressupdate">AccountAddressUpdate</a></td>
<td>

Updates an address of the logged-in user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the address to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#addressinput">AddressInput</a>!</td>
<td>

Fields required to update the address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountAddressDelete</strong></td>
<td valign="top"><a href="#accountaddressdelete">AccountAddressDelete</a></td>
<td>

Delete an address of the logged-in user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the address to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountSetDefaultAddress</strong></td>
<td valign="top"><a href="#accountsetdefaultaddress">AccountSetDefaultAddress</a></td>
<td>

Sets a default address for the authenticated user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the address to set as default.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#addresstypeenum">AddressTypeEnum</a>!</td>
<td>

The type of address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountRegister</strong></td>
<td valign="top"><a href="#accountregister">AccountRegister</a></td>
<td>

Register a new user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#accountregisterinput">AccountRegisterInput</a>!</td>
<td>

Fields required to create a user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountUpdate</strong></td>
<td valign="top"><a href="#accountupdate">AccountUpdate</a></td>
<td>

Updates the account of the logged-in user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#accountinput">AccountInput</a>!</td>
<td>

Fields required to update the account of the logged-in user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountRequestDeletion</strong></td>
<td valign="top"><a href="#accountrequestdeletion">AccountRequestDeletion</a></td>
<td>

Sends an email with the account removal link for the logged-in user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">redirectUrl</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

URL of a view where users should be redirected to delete their account. URL in RFC 1808 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountDelete</strong></td>
<td valign="top"><a href="#accountdelete">AccountDelete</a></td>
<td>

Remove user account.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A one-time token required to remove account. Sent by email using AccountRequestDeletion mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountUpdateMeta</strong> ⚠️</td>
<td valign="top"><a href="#accountupdatemeta">AccountUpdateMeta</a></td>
<td>

Updates metadata of the logged-in user.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressCreate</strong></td>
<td valign="top"><a href="#addresscreate">AddressCreate</a></td>
<td>

Creates user address.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#addressinput">AddressInput</a>!</td>
<td>

Fields required to create address.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a user to create address for.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressUpdate</strong></td>
<td valign="top"><a href="#addressupdate">AddressUpdate</a></td>
<td>

Updates an address.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the address to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#addressinput">AddressInput</a>!</td>
<td>

Fields required to update the address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressDelete</strong></td>
<td valign="top"><a href="#addressdelete">AddressDelete</a></td>
<td>

Deletes an address.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the address to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressSetDefault</strong></td>
<td valign="top"><a href="#addresssetdefault">AddressSetDefault</a></td>
<td>

Sets a default address for the given user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">addressId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the address.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#addresstypeenum">AddressTypeEnum</a>!</td>
<td>

The type of address.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the user to change the address for.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerCreate</strong></td>
<td valign="top"><a href="#customercreate">CustomerCreate</a></td>
<td>

Creates a new customer.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#usercreateinput">UserCreateInput</a>!</td>
<td>

Fields required to create a customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerUpdate</strong></td>
<td valign="top"><a href="#customerupdate">CustomerUpdate</a></td>
<td>

Updates an existing customer.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#customerinput">CustomerInput</a>!</td>
<td>

Fields required to update a customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerDelete</strong></td>
<td valign="top"><a href="#customerdelete">CustomerDelete</a></td>
<td>

Deletes a customer.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerBulkDelete</strong></td>
<td valign="top"><a href="#customerbulkdelete">CustomerBulkDelete</a></td>
<td>

Deletes customers.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of user IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffCreate</strong></td>
<td valign="top"><a href="#staffcreate">StaffCreate</a></td>
<td>

Creates a new staff user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#staffcreateinput">StaffCreateInput</a>!</td>
<td>

Fields required to create a staff user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffUpdate</strong></td>
<td valign="top"><a href="#staffupdate">StaffUpdate</a></td>
<td>

Updates an existing staff user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a staff user to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#staffupdateinput">StaffUpdateInput</a>!</td>
<td>

Fields required to update a staff user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffDelete</strong></td>
<td valign="top"><a href="#staffdelete">StaffDelete</a></td>
<td>

Deletes a staff user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a staff user to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffBulkDelete</strong></td>
<td valign="top"><a href="#staffbulkdelete">StaffBulkDelete</a></td>
<td>

Deletes staff users.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of user IDs to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userAvatarUpdate</strong></td>
<td valign="top"><a href="#useravatarupdate">UserAvatarUpdate</a></td>
<td>

Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">image</td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td>

Represents an image file in a multipart request.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userAvatarDelete</strong></td>
<td valign="top"><a href="#useravatardelete">UserAvatarDelete</a></td>
<td>

Deletes a user avatar. Only for staff members.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userBulkSetActive</strong></td>
<td valign="top"><a href="#userbulksetactive">UserBulkSetActive</a></td>
<td>

Activate or deactivate users.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#id">ID</a>]!</td>
<td>

List of user IDs to (de)activate).

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isActive</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Determine if users will be set active or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userUpdateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#userupdatemeta">UserUpdateMeta</a></td>
<td>

Updates metadata for user.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updateMetadata` mutation. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userClearMetadata</strong> ⚠️</td>
<td valign="top"><a href="#userclearmeta">UserClearMeta</a></td>
<td>

Clear metadata for user.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deleteMetadata` mutation. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userUpdatePrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#userupdateprivatemeta">UserUpdatePrivateMeta</a></td>
<td>

Updates private metadata for user.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userClearPrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#userclearprivatemeta">UserClearPrivateMeta</a></td>
<td>

Clear private metadata for user.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccountCreate</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccountcreate">ServiceAccountCreate</a></td>
<td>

Creates a new service account.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `appCreate` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#serviceaccountinput">ServiceAccountInput</a>!</td>
<td>

Fields required to create a new service account.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccountUpdate</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccountupdate">ServiceAccountUpdate</a></td>
<td>

Updates an existing service account.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `appUpdate` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a service account to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#serviceaccountinput">ServiceAccountInput</a>!</td>
<td>

Fields required to update an existing service account.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccountDelete</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccountdelete">ServiceAccountDelete</a></td>
<td>

Deletes a service account.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `appDelete` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a service account to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccountUpdatePrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccountupdateprivatemeta">ServiceAccountUpdatePrivateMeta</a></td>
<td>

Updates private metadata for a service account.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `updatePrivateMetadata` mutation with App instead.This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an object to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metainput">MetaInput</a>!</td>
<td>

Fields required to update new or stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccountClearPrivateMetadata</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccountclearprivatemeta">ServiceAccountClearPrivateMeta</a></td>
<td>

Clear private metadata for a service account.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `deletePrivateMetadata` mutation with App instead.This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of a customer to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metapath">MetaPath</a>!</td>
<td>

Fields required to identify stored metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccountTokenCreate</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccounttokencreate">ServiceAccountTokenCreate</a></td>
<td>

Creates a new token.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `appTokenCreate` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#serviceaccounttokeninput">ServiceAccountTokenInput</a>!</td>
<td>

Fields required to create a new auth token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccountTokenDelete</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccounttokendelete">ServiceAccountTokenDelete</a></td>
<td>

Deletes an authentication token assigned to service account.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `appTokenDelete` mutation instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an auth token to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissionGroupCreate</strong></td>
<td valign="top"><a href="#permissiongroupcreate">PermissionGroupCreate</a></td>
<td>

Create new permission group.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#permissiongroupcreateinput">PermissionGroupCreateInput</a>!</td>
<td>

Input fields to create permission group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissionGroupUpdate</strong></td>
<td valign="top"><a href="#permissiongroupupdate">PermissionGroupUpdate</a></td>
<td>

Update permission group.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the group to update.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#permissiongroupupdateinput">PermissionGroupUpdateInput</a>!</td>
<td>

Input fields to create permission group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissionGroupDelete</strong></td>
<td valign="top"><a href="#permissiongroupdelete">PermissionGroupDelete</a></td>
<td>

Delete permission group.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the group to delete.

</td>
</tr>
</tbody>
</table>

## Objects

### AccountAddressCreate

Create a new address for the customer.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance for which the address was created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
</tbody>
</table>

### AccountAddressDelete

Delete an address of the logged-in user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance for which the address was deleted.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
</tbody>
</table>

### AccountAddressUpdate

Updates an address of the logged-in user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user object for which the address was edited.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
</tbody>
</table>

### AccountDelete

Remove user account.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### AccountError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#accounterrorcode">AccountErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### AccountRegister

Register a new user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requiresConfirmation</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Informs whether users need to confirm their email address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### AccountRequestDeletion

Sends an email with the account removal link for the logged-in user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AccountSetDefaultAddress

Sets a default address for the authenticated user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

An updated user instance.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AccountUpdate

Updates the account of the logged-in user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### AccountUpdateMeta

Updates metadata of the logged-in user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### Address

Represents user address data.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>streetAddress1</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>streetAddress2</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityArea</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#countrydisplay">CountryDisplay</a>!</td>
<td>

Shop's default country.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryArea</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDefaultShippingAddress</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Address is user's default shipping address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDefaultBillingAddress</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Address is user's default billing address.

</td>
</tr>
</tbody>
</table>

### AddressCreate

Creates user address.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance for which the address was created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressDelete

Deletes an address.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance for which the address was deleted.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressSetDefault

Sets a default address for the given user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

An updated user instance.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressUpdate

Updates an address.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user object for which the address was edited.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressValidationData

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>countryCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressFormat</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressLatinFormat</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allowedFields</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requiredFields</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upperFields</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryAreaType</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryAreaChoices</strong></td>
<td valign="top">[<a href="#choicevalue">ChoiceValue</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityType</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityChoices</strong></td>
<td valign="top">[<a href="#choicevalue">ChoiceValue</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityAreaType</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityAreaChoices</strong></td>
<td valign="top">[<a href="#choicevalue">ChoiceValue</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCodeType</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCodeMatchers</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCodeExamples</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCodePrefix</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### App

Represents app data.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

The date and time when the app was created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determine if app will be set active or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permission">Permission</a>]</td>
<td>

List of the app's permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokens</strong></td>
<td valign="top">[<a href="#apptoken">AppToken</a>]</td>
<td>

Last 4 characters of the tokens.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#apptypeenum">AppTypeEnum</a></td>
<td>

Type of the app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhooks</strong></td>
<td valign="top">[<a href="#webhook">Webhook</a>]</td>
<td>

List of webhooks assigned to this app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aboutApp</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Description of this app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dataPrivacy</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Description of the data privacy defined for this app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dataPrivacyUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Url to details about the privacy policy on the app owner page.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>homepageUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Homepage of the app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>supportUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Support page for the app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>configurationUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Url to iframe with the configuration for the app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Url to iframe with the app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>version</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Version number of the app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accessToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

JWT token used to authenticate by thridparty app.

</td>
</tr>
</tbody>
</table>

### AppActivate

Activate the app.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#app">App</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#appcountableedge">AppCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### AppCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#app">App</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### AppCreate

Creates a new app.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The newly created authentication token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#app">App</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppDeactivate

Deactivate the app.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#app">App</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppDelete

Deletes an app.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#app">App</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppDeleteFailedInstallation

Delete failed installation.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appInstallation</strong></td>
<td valign="top"><a href="#appinstallation">AppInstallation</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#apperrorcode">AppErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permissionenum">PermissionEnum</a>!]</td>
<td>

List of permissions which causes the error.

</td>
</tr>
</tbody>
</table>

### AppFetchManifest

Fetch and validate manifest.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manifest</strong></td>
<td valign="top"><a href="#manifest">Manifest</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AppInstall

Install new app by using app manifest.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appInstallation</strong></td>
<td valign="top"><a href="#appinstallation">AppInstallation</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppInstallation

Represents ongoing installation of app.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>appName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manifestUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#jobstatusenum">JobStatusEnum</a>!</td>
<td>

Job status.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Created date time of job in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Date time of job last update in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Job message.

</td>
</tr>
</tbody>
</table>

### AppRetryInstall

Retry failed installation of new app.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appInstallation</strong></td>
<td valign="top"><a href="#appinstallation">AppInstallation</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppToken

Represents token data.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the authenticated token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Last 4 characters of the token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
</tbody>
</table>

### AppTokenCreate

Creates a new token.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The newly created authentication token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appToken</strong></td>
<td valign="top"><a href="#apptoken">AppToken</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppTokenDelete

Deletes an authentication token assigned to app.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appToken</strong></td>
<td valign="top"><a href="#apptoken">AppToken</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppTokenVerify

Verify provided app token.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Determine if token is valid or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AppUpdate

Updates an existing app.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appErrors</strong></td>
<td valign="top">[<a href="#apperror">AppError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#app">App</a></td>
<td></td>
</tr>
</tbody>
</table>

### AssignNavigation

Assigns storefront's navigation menus.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menu</strong></td>
<td valign="top"><a href="#menu">Menu</a></td>
<td>

Assigned navigation menu.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Attribute

Custom attribute of a product. Attributes can be assigned to products and variants at the product type level.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypes</strong></td>
<td valign="top"><a href="#producttypecountableconnection">ProductTypeCountableConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariantTypes</strong></td>
<td valign="top"><a href="#producttypecountableconnection">ProductTypeCountableConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>inputType</strong></td>
<td valign="top"><a href="#attributeinputtypeenum">AttributeInputTypeEnum</a></td>
<td>

The input type to use for entering attribute values in the dashboard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of an attribute displayed in the interface.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Internal representation of an attribute name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>values</strong></td>
<td valign="top">[<a href="#attributevalue">AttributeValue</a>]</td>
<td>

List of attribute's values.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valueRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the attribute requires values to be passed or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInStorefront</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the attribute should be visible or not in storefront.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>filterableInStorefront</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the attribute can be filtered in storefront.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>filterableInDashboard</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the attribute can be filtered in dashboard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableInGrid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the attribute can be displayed in the admin product list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#attributetranslation">AttributeTranslation</a></td>
<td>

Returns translated attribute fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>storefrontSearchPosition</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The position of the attribute in the storefront navigation (0 by default).

</td>
</tr>
</tbody>
</table>

### AttributeAssign

Assign attributes to a given product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td>

The updated product type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#productattributeerror">ProductAttributeError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AttributeBulkDelete

Deletes attributes.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AttributeClearMeta

Clears public metadata item for attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeClearPrivateMeta

Clears public metadata item for attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#attributecountableedge">AttributeCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### AttributeCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#attribute">Attribute</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### AttributeCreate

Creates an attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AttributeDelete

Deletes an attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeReorderValues

Reorder the values of an attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Attribute from which values are reordered.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AttributeTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#attributetranslation">AttributeTranslation</a></td>
<td>

Returns translated attribute fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

Custom attribute of a product.

</td>
</tr>
</tbody>
</table>

### AttributeTranslate

Creates/Updates translations for attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### AttributeUnassign

Un-assign attributes from a given product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td>

The updated product type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AttributeUpdate

Updates attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AttributeUpdateMeta

Update public metadata for attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeUpdatePrivateMeta

Update public metadata for attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeValue

Represents a value of an attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a value displayed in the interface.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Internal representation of a value (unique per attribute).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong> ⚠️</td>
<td valign="top"><a href="#attributevaluetype">AttributeValueType</a></td>
<td>

Type of value (used only when `value` field is set).

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `inputType` field to determine the type of attribute's value. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#attributevaluetranslation">AttributeValueTranslation</a></td>
<td>

Returns translated attribute value fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for attribute value.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>inputType</strong></td>
<td valign="top"><a href="#attributeinputtypeenum">AttributeInputTypeEnum</a></td>
<td>

The input type to use for entering attribute values in the dashboard.

</td>
</tr>
</tbody>
</table>

### AttributeValueBulkDelete

Deletes values of attributes.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AttributeValueCreate

Creates a value for an attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

The updated attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValue</strong></td>
<td valign="top"><a href="#attributevalue">AttributeValue</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeValueDelete

Deletes a value of an attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

The updated attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValue</strong></td>
<td valign="top"><a href="#attributevalue">AttributeValue</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeValueTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#attributevaluetranslation">AttributeValueTranslation</a></td>
<td>

Returns translated attribute value fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for attribute value.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValue</strong></td>
<td valign="top"><a href="#attributevalue">AttributeValue</a></td>
<td>

Represents a value of an attribute.

</td>
</tr>
</tbody>
</table>

### AttributeValueTranslate

Creates/Updates translations for attribute value.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValue</strong></td>
<td valign="top"><a href="#attributevalue">AttributeValue</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeValueTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### AttributeValueUpdate

Updates value of an attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a></td>
<td>

The updated attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeValue</strong></td>
<td valign="top"><a href="#attributevalue">AttributeValue</a></td>
<td></td>
</tr>
</tbody>
</table>

### AuthorizationKey

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#authorizationkeytype">AuthorizationKeyType</a>!</td>
<td>

Name of the authorization backend.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Authorization key (client ID).

</td>
</tr>
</tbody>
</table>

### AuthorizationKeyAdd

Adds an authorization key.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authorizationKey</strong></td>
<td valign="top"><a href="#authorizationkey">AuthorizationKey</a></td>
<td>

Newly added authorization key.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shop</strong></td>
<td valign="top"><a href="#shop">Shop</a></td>
<td>

Updated shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AuthorizationKeyDelete

Deletes an authorization key.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authorizationKey</strong></td>
<td valign="top"><a href="#authorizationkey">AuthorizationKey</a></td>
<td>

Authorization key that was deleted.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shop</strong></td>
<td valign="top"><a href="#shop">Shop</a></td>
<td>

Updated shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### BulkProductError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#producterrorcode">ProductErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>index</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Index of an input list item that caused the error.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouses</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of warehouse IDs which causes the error.

</td>
</tr>
</tbody>
</table>

### BulkStockError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#producterrorcode">ProductErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>index</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Index of an input list item that caused the error.

</td>
</tr>
</tbody>
</table>

### Category

Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>level</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#categorycountableconnection">CategoryCountableConnection</a></td>
<td>

List of ancestors of the category.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top"><a href="#productcountableconnection">ProductCountableConnection</a></td>
<td>

List of products in the category.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong> ⚠️</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The storefront's URL for the category.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>children</strong></td>
<td valign="top"><a href="#categorycountableconnection">CategoryCountableConnection</a></td>
<td>

List of children of the category.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>backgroundImage</strong></td>
<td valign="top"><a href="#image">Image</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">size</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Size of the image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#categorytranslation">CategoryTranslation</a></td>
<td>

Returns translated category fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for category.

</td>
</tr>
</tbody>
</table>

### CategoryBulkDelete

Deletes categories.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CategoryClearMeta

Clears public metadata for category.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
</tbody>
</table>

### CategoryClearPrivateMeta

Clears private metadata for category.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
</tbody>
</table>

### CategoryCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#categorycountableedge">CategoryCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### CategoryCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### CategoryCreate

Creates a new category.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
</tbody>
</table>

### CategoryDelete

Deletes a category.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
</tbody>
</table>

### CategoryTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#categorytranslation">CategoryTranslation</a></td>
<td>

Returns translated category fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for category.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td>

Represents a single category of products.

</td>
</tr>
</tbody>
</table>

### CategoryTranslate

Creates/Updates translations for Category.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
</tbody>
</table>

### CategoryTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### CategoryUpdate

Updates a category.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
</tbody>
</table>

### CategoryUpdateMeta

Update public metadata for category.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
</tbody>
</table>

### CategoryUpdatePrivateMeta

Update private metadata for category.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
</tbody>
</table>

### Checkout

Checkout object.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastChange</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>billingAddress</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingAddress</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#shippingmethod">ShippingMethod</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>note</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discount</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translatedDiscountName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucherCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCards</strong></td>
<td valign="top">[<a href="#giftcard">GiftCard</a>]</td>
<td>

List of gift cards associated with this checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableShippingMethods</strong></td>
<td valign="top">[<a href="#shippingmethod">ShippingMethod</a>]!</td>
<td>

Shipping methods that can be used with this order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availablePaymentGateways</strong></td>
<td valign="top">[<a href="#paymentgateway">PaymentGateway</a>!]!</td>
<td>

List of available payment gateways.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email of a customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isShippingRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Returns True, if checkout requires shipping.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lines</strong></td>
<td valign="top">[<a href="#checkoutline">CheckoutLine</a>]</td>
<td>

A list of checkout lines, each containing information about an item in the checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingPrice</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The price of the shipping, with all the taxes included.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subtotalPrice</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The price of the checkout before shipping, with taxes included.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>

The checkout's token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalPrice</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.

</td>
</tr>
</tbody>
</table>

### CheckoutAddPromoCode

Adds a gift card or a voucher to a checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

The checkout with the added gift card or voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutBillingAddressUpdate

Update billing address in the existing checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

An updated checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutClearMeta

Clear metadata for checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutClearPrivateMeta

Clear private metadata for checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutComplete

Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Placed order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>confirmationNeeded</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Set to true if payment needs to be confirmed before checkout is complete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>confirmationData</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td>

Confirmation data used to process additional authorization steps.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#checkoutcountableedge">CheckoutCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### CheckoutCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#checkout">Checkout</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### CheckoutCreate

Create a new checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutCustomerAttach

Sets the customer as the owner of the checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

An updated checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutCustomerDetach

Removes the user assigned as the owner of the checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

An updated checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutEmailUpdate

Updates email address in the existing checkout object.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

An updated checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#checkouterrorcode">CheckoutErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variants</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of varint IDs which causes the error.

</td>
</tr>
</tbody>
</table>

### CheckoutLine

Represents an item in the checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalPrice</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The sum of the checkout line price, taxes and discounts.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requiresShipping</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Indicates whether the item need to be delivered.

</td>
</tr>
</tbody>
</table>

### CheckoutLineCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#checkoutlinecountableedge">CheckoutLineCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### CheckoutLineCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#checkoutline">CheckoutLine</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### CheckoutLineDelete

Deletes a CheckoutLine.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

An updated checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutLinesAdd

Adds a checkout line to the existing checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

An updated checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutLinesUpdate

Updates checkout line in the existing checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

An updated checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutPaymentCreate

Create a new payment for given checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

Related checkout object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payment</strong></td>
<td valign="top"><a href="#payment">Payment</a></td>
<td>

A newly created payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentErrors</strong></td>
<td valign="top">[<a href="#paymenterror">PaymentError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutRemovePromoCode

Remove a gift card or a voucher from a checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

The checkout with the removed gift card or voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutShippingAddressUpdate

Update shipping address in the existing checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

An updated checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutShippingMethodUpdate

Updates the shipping address of the checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

An updated checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutUpdateMeta

Updates metadata for checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td></td>
</tr>
</tbody>
</table>

### CheckoutUpdatePrivateMeta

Updates private metadata for checkout.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkoutErrors</strong></td>
<td valign="top">[<a href="#checkouterror">CheckoutError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td></td>
</tr>
</tbody>
</table>

### ChoiceValue

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>raw</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>verbose</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Collection

Represents a collection of products.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicationDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPublished</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top"><a href="#productcountableconnection">ProductCountableConnection</a></td>
<td>

List of products in this collection.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#productfilterinput">ProductFilterInput</a></td>
<td>

Filtering options for products.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top"><a href="#productorder">ProductOrder</a></td>
<td>

Sort products.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>backgroundImage</strong></td>
<td valign="top"><a href="#image">Image</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">size</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Size of the image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#collectiontranslation">CollectionTranslation</a></td>
<td>

Returns translated collection fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for collection.

</td>
</tr>
</tbody>
</table>

### CollectionAddProducts

Adds products to a collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>

Collection to which products will be added.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionBulkDelete

Deletes collections.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionBulkPublish

Publish collections.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionClearMeta

Clears public metadata for collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionClearPrivateMeta

Clears private metadata item for collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#collectioncountableedge">CollectionCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### CollectionCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#collection">Collection</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### CollectionCreate

Creates a new collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionDelete

Deletes a collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionRemoveProducts

Remove products from a collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>

Collection from which products will be removed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionReorderProducts

Reorder the products of a collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>

Collection from which products are reordered.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#collectiontranslation">CollectionTranslation</a></td>
<td>

Returns translated collection fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for collection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>

Represents a collection of products.

</td>
</tr>
</tbody>
</table>

### CollectionTranslate

Creates/Updates translations for collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### CollectionUpdate

Updates a collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionUpdateMeta

Update public metadata for collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionUpdatePrivateMeta

Update private metadata for collection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
</tbody>
</table>

### ConfigurationItem

Stores information about a single configuration field.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of the field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Current value of the field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#configurationtypefieldenum">ConfigurationTypeFieldEnum</a></td>
<td>

Type of the field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>helpText</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Help text for the field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Label for the field.

</td>
</tr>
</tbody>
</table>

### ConfirmAccount

Confirm user account with token sent by email during registration.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

An activated user account.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ConfirmEmailChange

Confirm the email change of the logged-in user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance with a new email.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CountryDisplay

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Country code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Country name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>vat</strong></td>
<td valign="top"><a href="#vat">VAT</a></td>
<td>

Country tax.

</td>
</tr>
</tbody>
</table>

### CreateToken

Create JWT token.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

JWT token, required to authenticate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>refreshToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

JWT refresh token, required to re-generate access token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>csrfToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

CSRF token required to re-generate access token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreditCard

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>brand</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Card brand.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstDigits</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

First 4 digits of the card number.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastDigits</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Last 4 digits of the card number.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expMonth</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Two-digit number representing the card’s expiration month.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expYear</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Four-digit number representing the card’s expiration year.

</td>
</tr>
</tbody>
</table>

### CustomerBulkDelete

Deletes customers.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CustomerCreate

Creates a new customer.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerDelete

Deletes a customer.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerEvent

History log of the customer.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Date when event happened at in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#customereventsenum">CustomerEventsEnum</a></td>
<td>

Customer event type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

User who performed the action.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Content of the event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Number of objects concerned by the event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

The concerned order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderLine</strong></td>
<td valign="top"><a href="#orderline">OrderLine</a></td>
<td>

The concerned order line.

</td>
</tr>
</tbody>
</table>

### CustomerUpdate

Updates an existing customer.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### DeactivateAllUserTokens

Deactivate all JWT tokens of the currently authenticated user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DeleteMetadata

Delete metadata of an object.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadataErrors</strong></td>
<td valign="top">[<a href="#metadataerror">MetadataError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>item</strong></td>
<td valign="top"><a href="#objectwithmetadata">ObjectWithMetadata</a></td>
<td></td>
</tr>
</tbody>
</table>

### DeletePrivateMetadata

Delete object's private metadata.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadataErrors</strong></td>
<td valign="top">[<a href="#metadataerror">MetadataError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>item</strong></td>
<td valign="top"><a href="#objectwithmetadata">ObjectWithMetadata</a></td>
<td></td>
</tr>
</tbody>
</table>

### DigitalContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>useDefaultSettings</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>automaticFulfillment</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentFile</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxDownloads</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>urlValidDays</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>urls</strong></td>
<td valign="top">[<a href="#digitalcontenturl">DigitalContentUrl</a>]</td>
<td>

List of URLs for the digital variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
</tbody>
</table>

### DigitalContentCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#digitalcontentcountableedge">DigitalContentCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### DigitalContentCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#digitalcontent">DigitalContent</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### DigitalContentCreate

Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#digitalcontent">DigitalContent</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DigitalContentDelete

Remove digital content assigned to given variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DigitalContentUpdate

Update digital content.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#digitalcontent">DigitalContent</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DigitalContentUrl

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#digitalcontent">DigitalContent</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>downloadNum</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL for digital content.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>

UUID of digital content.

</td>
</tr>
</tbody>
</table>

### DigitalContentUrlCreate

Generate new URL to digital content.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>digitalContentUrl</strong></td>
<td valign="top"><a href="#digitalcontenturl">DigitalContentUrl</a></td>
<td></td>
</tr>
</tbody>
</table>

### DiscountError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#discounterrorcode">DiscountErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### Domain

Represents shop's domain.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>host</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The host name of the domain.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sslEnabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Inform if SSL is enabled.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Shop's absolute URL.

</td>
</tr>
</tbody>
</table>

### DraftOrderBulkDelete

Deletes draft orders.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DraftOrderComplete

Completes creating an order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Completed order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DraftOrderCreate

Creates a new draft order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td></td>
</tr>
</tbody>
</table>

### DraftOrderDelete

Deletes a draft order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td></td>
</tr>
</tbody>
</table>

### DraftOrderLineDelete

Deletes an order line from a draft order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

A related draft order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderLine</strong></td>
<td valign="top"><a href="#orderline">OrderLine</a></td>
<td>

An order line that was deleted.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DraftOrderLineUpdate

Updates an order line of a draft order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

A related draft order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderLine</strong></td>
<td valign="top"><a href="#orderline">OrderLine</a></td>
<td></td>
</tr>
</tbody>
</table>

### DraftOrderLinesBulkDelete

Deletes order lines.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DraftOrderLinesCreate

Create order lines for a draft order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

A related draft order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderLines</strong></td>
<td valign="top">[<a href="#orderline">OrderLine</a>!]</td>
<td>

List of newly added order lines.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DraftOrderUpdate

Updates a draft order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td></td>
</tr>
</tbody>
</table>

### Error

Represents an error in the input of a mutation.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
</tbody>
</table>

### ExportError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#exporterrorcode">ExportErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### ExportEvent

History log of export file.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Date when event happened at in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#exporteventsenum">ExportEventsEnum</a>!</td>
<td>

Export event type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

User who performed the action.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#app">App</a></td>
<td>

App which performed the action.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Content of the event.

</td>
</tr>
</tbody>
</table>

### ExportFile

Represents a job data of exported file.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#app">App</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#jobstatusenum">JobStatusEnum</a>!</td>
<td>

Job status.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Created date time of job in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Date time of job last update in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Job message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The URL of field to download.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top">[<a href="#exportevent">ExportEvent</a>!]</td>
<td>

List of events associated with the export.

</td>
</tr>
</tbody>
</table>

### ExportFileCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#exportfilecountableedge">ExportFileCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### ExportFileCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#exportfile">ExportFile</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### ExportProducts

Export products to csv file.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exportFile</strong></td>
<td valign="top"><a href="#exportfile">ExportFile</a></td>
<td>

The newly created export file job which is responsible for export data.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exportErrors</strong></td>
<td valign="top">[<a href="#exporterror">ExportError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Fulfillment

Represents order fulfillment.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfillmentOrder</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#fulfillmentstatus">FulfillmentStatus</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackingNumber</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lines</strong></td>
<td valign="top">[<a href="#fulfillmentline">FulfillmentLine</a>]</td>
<td>

List of lines for the fulfillment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statusDisplay</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User-friendly fulfillment status.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a></td>
<td>

Warehouse from fulfillment was fulfilled.

</td>
</tr>
</tbody>
</table>

### FulfillmentCancel

Cancels existing fulfillment and optionally restocks items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfillment</strong></td>
<td valign="top"><a href="#fulfillment">Fulfillment</a></td>
<td>

A canceled fulfillment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Order which fulfillment was cancelled.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### FulfillmentClearMeta

Clears metadata for fulfillment.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfillment</strong></td>
<td valign="top"><a href="#fulfillment">Fulfillment</a></td>
<td></td>
</tr>
</tbody>
</table>

### FulfillmentClearPrivateMeta

Clears private metadata for fulfillment.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfillment</strong></td>
<td valign="top"><a href="#fulfillment">Fulfillment</a></td>
<td></td>
</tr>
</tbody>
</table>

### FulfillmentLine

Represents line of the fulfillment.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderLine</strong></td>
<td valign="top"><a href="#orderline">OrderLine</a></td>
<td></td>
</tr>
</tbody>
</table>

### FulfillmentUpdateMeta

Updates metadata for fulfillment.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfillment</strong></td>
<td valign="top"><a href="#fulfillment">Fulfillment</a></td>
<td></td>
</tr>
</tbody>
</table>

### FulfillmentUpdatePrivateMeta

Updates metadata for fulfillment.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfillment</strong></td>
<td valign="top"><a href="#fulfillment">Fulfillment</a></td>
<td></td>
</tr>
</tbody>
</table>

### FulfillmentUpdateTracking

Updates a fulfillment for an order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfillment</strong></td>
<td valign="top"><a href="#fulfillment">Fulfillment</a></td>
<td>

A fulfillment with updated tracking.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Order for which fulfillment was updated.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### GatewayConfigLine

Payment gateway client configuration key and value pair.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Gateway config key.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Gateway config value for key.

</td>
</tr>
</tbody>
</table>

### Geolocalization

Represents customers's geolocalization data.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#countrydisplay">CountryDisplay</a></td>
<td>

Country of the user acquired by his IP address.

</td>
</tr>
</tbody>
</table>

### GiftCard

A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Gift card code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

The customer who bought a gift card.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastUsedOn</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>initialBalance</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currentBalance</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Code in format which allows displaying in a user interface.

</td>
</tr>
</tbody>
</table>

### GiftCardActivate

Activate a gift card.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCard</strong></td>
<td valign="top"><a href="#giftcard">GiftCard</a></td>
<td>

A gift card to activate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCardErrors</strong></td>
<td valign="top">[<a href="#giftcarderror">GiftCardError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### GiftCardCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#giftcardcountableedge">GiftCardCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### GiftCardCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#giftcard">GiftCard</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### GiftCardCreate

Creates a new gift card.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCardErrors</strong></td>
<td valign="top">[<a href="#giftcarderror">GiftCardError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCard</strong></td>
<td valign="top"><a href="#giftcard">GiftCard</a></td>
<td></td>
</tr>
</tbody>
</table>

### GiftCardDeactivate

Deactivate a gift card.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCard</strong></td>
<td valign="top"><a href="#giftcard">GiftCard</a></td>
<td>

A gift card to deactivate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCardErrors</strong></td>
<td valign="top">[<a href="#giftcarderror">GiftCardError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### GiftCardError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#giftcarderrorcode">GiftCardErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### GiftCardUpdate

Update a gift card.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCardErrors</strong></td>
<td valign="top">[<a href="#giftcarderror">GiftCardError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCard</strong></td>
<td valign="top"><a href="#giftcard">GiftCard</a></td>
<td></td>
</tr>
</tbody>
</table>

### Group

Represents permission group data.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permission">Permission</a>]</td>
<td>

List of group permissions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>users</strong></td>
<td valign="top">[<a href="#user">User</a>]</td>
<td>

List of group users

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userCanManage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

True, if the currently authenticated user has rights to manage a group.

</td>
</tr>
</tbody>
</table>

### GroupCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#groupcountableedge">GroupCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### GroupCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#group">Group</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### HomepageCollectionUpdate

Updates homepage collection of the shop.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shop</strong></td>
<td valign="top"><a href="#shop">Shop</a></td>
<td>

Updated shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Image

Represents an image.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The URL of the image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>alt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alt text for an image.

</td>
</tr>
</tbody>
</table>

### Invoice

Represents an Invoice.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#jobstatusenum">JobStatusEnum</a>!</td>
<td>

Job status.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Created date time of job in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Date time of job last update in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Job message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL to download an invoice.

</td>
</tr>
</tbody>
</table>

### InvoiceCreate

Creates a ready to send invoice.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceErrors</strong></td>
<td valign="top">[<a href="#invoiceerror">InvoiceError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoice</strong></td>
<td valign="top"><a href="#invoice">Invoice</a></td>
<td></td>
</tr>
</tbody>
</table>

### InvoiceDelete

Deletes an invoice.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceErrors</strong></td>
<td valign="top">[<a href="#invoiceerror">InvoiceError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoice</strong></td>
<td valign="top"><a href="#invoice">Invoice</a></td>
<td></td>
</tr>
</tbody>
</table>

### InvoiceError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#invoiceerrorcode">InvoiceErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### InvoiceRequest

Request an invoice for the order using plugin.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Order related to an invoice.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceErrors</strong></td>
<td valign="top">[<a href="#invoiceerror">InvoiceError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoice</strong></td>
<td valign="top"><a href="#invoice">Invoice</a></td>
<td></td>
</tr>
</tbody>
</table>

### InvoiceRequestDelete

Requests deletion of an invoice.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceErrors</strong></td>
<td valign="top">[<a href="#invoiceerror">InvoiceError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoice</strong></td>
<td valign="top"><a href="#invoice">Invoice</a></td>
<td></td>
</tr>
</tbody>
</table>

### InvoiceSendEmail

Send an invoice by email.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceErrors</strong></td>
<td valign="top">[<a href="#invoiceerror">InvoiceError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoice</strong></td>
<td valign="top"><a href="#invoice">Invoice</a></td>
<td></td>
</tr>
</tbody>
</table>

### InvoiceUpdate

Updates an invoice.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceErrors</strong></td>
<td valign="top">[<a href="#invoiceerror">InvoiceError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoice</strong></td>
<td valign="top"><a href="#invoice">Invoice</a></td>
<td></td>
</tr>
</tbody>
</table>

### LanguageDisplay

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

ISO 639 representation of the language name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Full name of the language.

</td>
</tr>
</tbody>
</table>

### Manifest

The manifest definition.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>identifier</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>version</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>about</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permission">Permission</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>appUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>configurationUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokenTargetUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dataPrivacy</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dataPrivacyUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>homepageUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>supportUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Margin

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stop</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### Menu

Represents a single menu - an object that is used to help navigate through the store.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>items</strong></td>
<td valign="top">[<a href="#menuitem">MenuItem</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### MenuBulkDelete

Deletes menus.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### MenuCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#menucountableedge">MenuCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### MenuCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#menu">Menu</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### MenuCreate

Creates a new Menu.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menu</strong></td>
<td valign="top"><a href="#menu">Menu</a></td>
<td></td>
</tr>
</tbody>
</table>

### MenuDelete

Deletes a menu.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menu</strong></td>
<td valign="top"><a href="#menu">Menu</a></td>
<td></td>
</tr>
</tbody>
</table>

### MenuError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#menuerrorcode">MenuErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### MenuItem

Represents a single item of the related menu. Can store categories, collection or pages.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menu</strong></td>
<td valign="top"><a href="#menu">Menu</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#menuitem">MenuItem</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#page">Page</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>level</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>children</strong></td>
<td valign="top">[<a href="#menuitem">MenuItem</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL to the menu item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#menuitemtranslation">MenuItemTranslation</a></td>
<td>

Returns translated menu item fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for menu item.

</td>
</tr>
</tbody>
</table>

### MenuItemBulkDelete

Deletes menu items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### MenuItemCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#menuitemcountableedge">MenuItemCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### MenuItemCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#menuitem">MenuItem</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### MenuItemCreate

Creates a new menu item.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItem</strong></td>
<td valign="top"><a href="#menuitem">MenuItem</a></td>
<td></td>
</tr>
</tbody>
</table>

### MenuItemDelete

Deletes a menu item.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItem</strong></td>
<td valign="top"><a href="#menuitem">MenuItem</a></td>
<td></td>
</tr>
</tbody>
</table>

### MenuItemMove

Moves items of menus.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menu</strong></td>
<td valign="top"><a href="#menu">Menu</a></td>
<td>

Assigned menu to move within.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### MenuItemTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#menuitemtranslation">MenuItemTranslation</a></td>
<td>

Returns translated menu item fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for menu item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItem</strong></td>
<td valign="top"><a href="#menuitem">MenuItem</a></td>
<td>

Represents a single item of the related menu. Can store categories, collection or pages.

</td>
</tr>
</tbody>
</table>

### MenuItemTranslate

Creates/Updates translations for Menu Item.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItem</strong></td>
<td valign="top"><a href="#menuitem">MenuItem</a></td>
<td></td>
</tr>
</tbody>
</table>

### MenuItemTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### MenuItemUpdate

Updates a menu item.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuItem</strong></td>
<td valign="top"><a href="#menuitem">MenuItem</a></td>
<td></td>
</tr>
</tbody>
</table>

### MenuUpdate

Updates a menu.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menuErrors</strong></td>
<td valign="top">[<a href="#menuerror">MenuError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menu</strong></td>
<td valign="top"><a href="#menu">Menu</a></td>
<td></td>
</tr>
</tbody>
</table>

### MetaClientStore

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Metadata client's name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metaitem">MetaItem</a>]!</td>
<td>

Metadata stored for a client.

</td>
</tr>
</tbody>
</table>

### MetaItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Key of a metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Value of a metadata item.

</td>
</tr>
</tbody>
</table>

### MetaStore

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>namespace</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of metadata client group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>clients</strong></td>
<td valign="top">[<a href="#metaclientstore">MetaClientStore</a>]!</td>
<td>

List of clients that stored metadata in a group.

</td>
</tr>
</tbody>
</table>

### MetadataError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#metadataerrorcode">MetadataErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### MetadataItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Key of a metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Value of a metadata item.

</td>
</tr>
</tbody>
</table>

### Money

Represents amount of money in specific currency.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>currency</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Currency code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

Amount of money.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>localized</strong> ⚠️</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Money formatted according to the current locale.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Price formatting according to the current locale should be handled by the frontend client. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
</tbody>
</table>

### MoneyRange

Represents a range of amounts of money.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Lower bound of a price range.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stop</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Upper bound of a price range.

</td>
</tr>
</tbody>
</table>

### Navigation

Represents shop's navigation menus.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>main</strong></td>
<td valign="top"><a href="#menu">Menu</a></td>
<td>

Main navigation bar.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>secondary</strong></td>
<td valign="top"><a href="#menu">Menu</a></td>
<td>

Secondary navigation bar.

</td>
</tr>
</tbody>
</table>

### Order

Represents an order in the shop.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#orderstatus">OrderStatus</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>languageCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackingClientId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>billingAddress</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingAddress</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#shippingmethod">ShippingMethod</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethodName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingPrice</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

Total price of shipping.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#voucher">Voucher</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCards</strong></td>
<td valign="top">[<a href="#giftcard">GiftCard</a>]</td>
<td>

List of user gift cards.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discount</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translatedDiscountName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayGrossPrices</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerNote</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weight">Weight</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfillments</strong></td>
<td valign="top">[<a href="#fulfillment">Fulfillment</a>]!</td>
<td>

List of shipments for the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lines</strong></td>
<td valign="top">[<a href="#orderline">OrderLine</a>]!</td>
<td>

List of order lines.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actions</strong></td>
<td valign="top">[<a href="#orderaction">OrderAction</a>]!</td>
<td>

List of actions that can be performed in the current state of an order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableShippingMethods</strong></td>
<td valign="top">[<a href="#shippingmethod">ShippingMethod</a>]</td>
<td>

Shipping methods that can be used with this order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoices</strong></td>
<td valign="top">[<a href="#invoice">Invoice</a>]</td>
<td>

List of order invoices.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User-friendly number of an order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPaid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Informs if an order is fully paid.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentStatus</strong></td>
<td valign="top"><a href="#paymentchargestatusenum">PaymentChargeStatusEnum</a></td>
<td>

Internal payment status.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentStatusDisplay</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User-friendly payment status.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payments</strong></td>
<td valign="top">[<a href="#payment">Payment</a>]</td>
<td>

List of payments for the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

Total amount of the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subtotal</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The sum of line prices not including shipping.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statusDisplay</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User-friendly order status.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canFinalize</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Informs whether a draft order can be finalized(turned into a regular order).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalAuthorized</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Amount authorized for the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCaptured</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Amount captured by payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top">[<a href="#orderevent">OrderEvent</a>]</td>
<td>

List of events associated with the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalBalance</strong></td>
<td valign="top"><a href="#money">Money</a>!</td>
<td>

The difference between the paid and the order total amount.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userEmail</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isShippingRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Returns True, if order requires shipping.

</td>
</tr>
</tbody>
</table>

### OrderAddNote

Adds note to the order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Order with the note added.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>event</strong></td>
<td valign="top"><a href="#orderevent">OrderEvent</a></td>
<td>

Order note created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### OrderBulkCancel

Cancels orders.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### OrderCancel

Cancel an order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Canceled order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### OrderCapture

Capture an order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Captured order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### OrderClearMeta

Clears stored metadata value.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td></td>
</tr>
</tbody>
</table>

### OrderClearPrivateMeta

Clears stored private metadata value.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td></td>
</tr>
</tbody>
</table>

### OrderCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#ordercountableedge">OrderCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### OrderCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#order">Order</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### OrderError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#ordererrorcode">OrderErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Warehouse ID which causes the error.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderLine</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Order line ID which causes the error.

</td>
</tr>
</tbody>
</table>

### OrderEvent

History log of the order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Date when event happened at in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#ordereventsenum">OrderEventsEnum</a></td>
<td>

Order event type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

User who performed the action.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Content of the event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>emailType</strong></td>
<td valign="top"><a href="#ordereventsemailsenum">OrderEventsEmailsEnum</a></td>
<td>

Type of an email sent to the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Amount of money.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The payment ID from the payment gateway.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentGateway</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The payment gateway of the payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Number of items.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>composedId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Composed ID of the Fulfillment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderNumber</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User-friendly number of an order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>invoiceNumber</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Number of an invoice related to the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>oversoldItems</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

List of oversold lines names.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lines</strong></td>
<td valign="top">[<a href="#ordereventorderlineobject">OrderEventOrderLineObject</a>]</td>
<td>

The concerned lines.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfilledItems</strong></td>
<td valign="top">[<a href="#fulfillmentline">FulfillmentLine</a>]</td>
<td>

The lines fulfilled.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a></td>
<td>

The warehouse were items were restocked.

</td>
</tr>
</tbody>
</table>

### OrderEventCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#ordereventcountableedge">OrderEventCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### OrderEventCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#orderevent">OrderEvent</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### OrderEventOrderLineObject

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The variant quantity.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderLine</strong></td>
<td valign="top"><a href="#orderline">OrderLine</a></td>
<td>

The order line.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itemName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The variant name.

</td>
</tr>
</tbody>
</table>

### OrderFulfill

Creates new fulfillments for an order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fulfillments</strong></td>
<td valign="top">[<a href="#fulfillment">Fulfillment</a>]</td>
<td>

List of created fulfillments.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Fulfilled order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### OrderLine

Represents order line of particular order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variantName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productSku</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isShippingRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantityFulfilled</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxRate</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>digitalContentUrl</strong></td>
<td valign="top"><a href="#digitalcontenturl">DigitalContentUrl</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>thumbnail</strong></td>
<td valign="top"><a href="#image">Image</a></td>
<td>

The main thumbnail for the ordered product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">size</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Size of thumbnail.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>unitPrice</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

Price of the single item in the order line.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalPrice</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

Price of the order line.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td>

A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translatedProductName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Product name in the customer's language

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translatedVariantName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Variant name in the customer's language

</td>
</tr>
</tbody>
</table>

### OrderMarkAsPaid

Mark order as manually paid.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Order marked as paid.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### OrderRefund

Refund an order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

A refunded order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### OrderUpdate

Updates an order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td></td>
</tr>
</tbody>
</table>

### OrderUpdateMeta

Updates meta for order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td></td>
</tr>
</tbody>
</table>

### OrderUpdatePrivateMeta

Updates private meta for order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td></td>
</tr>
</tbody>
</table>

### OrderUpdateShipping

Updates a shipping method of the order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

Order with updated shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### OrderVoid

Void an order.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td>

A voided order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orderErrors</strong></td>
<td valign="top">[<a href="#ordererror">OrderError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Page

A static page that can be manually added by a shop operator through the dashboard.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicationDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPublished</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#pagetranslation">PageTranslation</a></td>
<td>

Returns translated page fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for page.

</td>
</tr>
</tbody>
</table>

### PageBulkDelete

Deletes pages.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageErrors</strong></td>
<td valign="top">[<a href="#pageerror">PageError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### PageBulkPublish

Publish pages.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageErrors</strong></td>
<td valign="top">[<a href="#pageerror">PageError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### PageCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#pagecountableedge">PageCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### PageCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#page">Page</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### PageCreate

Creates a new page.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageErrors</strong></td>
<td valign="top">[<a href="#pageerror">PageError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#page">Page</a></td>
<td></td>
</tr>
</tbody>
</table>

### PageDelete

Deletes a page.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageErrors</strong></td>
<td valign="top">[<a href="#pageerror">PageError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#page">Page</a></td>
<td></td>
</tr>
</tbody>
</table>

### PageError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#pageerrorcode">PageErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### PageInfo

The Relay compliant `PageInfo` type, containing data necessary to paginate this connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>hasNextPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

When paginating forwards, are there more items?

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasPreviousPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

When paginating backwards, are there more items?

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

When paginating backwards, the cursor to continue.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

When paginating forwards, the cursor to continue.

</td>
</tr>
</tbody>
</table>

### PageTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#pagetranslation">PageTranslation</a></td>
<td>

Returns translated page fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for page.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#page">Page</a></td>
<td>

('A static page that can be manually added by a shop operator ', 'through the dashboard.')

</td>
</tr>
</tbody>
</table>

### PageTranslate

Creates/Updates translations for Page.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#pagetranslatablecontent">PageTranslatableContent</a></td>
<td></td>
</tr>
</tbody>
</table>

### PageTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### PageUpdate

Updates an existing page.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageErrors</strong></td>
<td valign="top">[<a href="#pageerror">PageError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#page">Page</a></td>
<td></td>
</tr>
</tbody>
</table>

### PasswordChange

Change the password of the logged in user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance with a new password.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Payment

Represents a payment of a given type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gateway</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#order">Order</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerIpAddress</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chargeStatus</strong></td>
<td valign="top"><a href="#paymentchargestatusenum">PaymentChargeStatusEnum</a>!</td>
<td>

Internal payment status.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actions</strong></td>
<td valign="top">[<a href="#orderaction">OrderAction</a>]!</td>
<td>

List of actions that can be performed in the current state of a payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Total amount of the payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>capturedAmount</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Total amount captured for this payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactions</strong></td>
<td valign="top">[<a href="#transaction">Transaction</a>]</td>
<td>

List of all transactions within this payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableCaptureAmount</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Maximum amount of money that can be captured.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableRefundAmount</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Maximum amount of money that can be refunded.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creditCard</strong></td>
<td valign="top"><a href="#creditcard">CreditCard</a></td>
<td>

The details of the card used for this payment.

</td>
</tr>
</tbody>
</table>

### PaymentCapture

Captures the authorized payment amount.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payment</strong></td>
<td valign="top"><a href="#payment">Payment</a></td>
<td>

Updated payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentErrors</strong></td>
<td valign="top">[<a href="#paymenterror">PaymentError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### PaymentCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#paymentcountableedge">PaymentCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### PaymentCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#payment">Payment</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### PaymentError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#paymenterrorcode">PaymentErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### PaymentGateway

Available payment gateway backend with configuration necessary to setup client.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Payment gateway name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Payment gateway ID.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>config</strong></td>
<td valign="top">[<a href="#gatewayconfigline">GatewayConfigLine</a>!]!</td>
<td>

Payment gateway client configuration.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currencies</strong></td>
<td valign="top">[<a href="#string">String</a>]!</td>
<td>

Payment gateway supported currencies.

</td>
</tr>
</tbody>
</table>

### PaymentRefund

Refunds the captured payment amount.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payment</strong></td>
<td valign="top"><a href="#payment">Payment</a></td>
<td>

Updated payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentErrors</strong></td>
<td valign="top">[<a href="#paymenterror">PaymentError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### PaymentSource

Represents a payment source stored for user in payment gateway, such as credit card.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>gateway</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Payment gateway name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creditCardInfo</strong></td>
<td valign="top"><a href="#creditcard">CreditCard</a></td>
<td>

Stored credit card details if available.

</td>
</tr>
</tbody>
</table>

### PaymentVoid

Voids the authorized payment.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payment</strong></td>
<td valign="top"><a href="#payment">Payment</a></td>
<td>

Updated payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>paymentErrors</strong></td>
<td valign="top">[<a href="#paymenterror">PaymentError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Permission

Represents a permission object in a friendly form.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#permissionenum">PermissionEnum</a>!</td>
<td>

Internal code for permission.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Describe action(s) allowed to do by permission.

</td>
</tr>
</tbody>
</table>

### PermissionGroupCreate

Create new permission group.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissionGroupErrors</strong></td>
<td valign="top">[<a href="#permissiongrouperror">PermissionGroupError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>group</strong></td>
<td valign="top"><a href="#group">Group</a></td>
<td></td>
</tr>
</tbody>
</table>

### PermissionGroupDelete

Delete permission group.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissionGroupErrors</strong></td>
<td valign="top">[<a href="#permissiongrouperror">PermissionGroupError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>group</strong></td>
<td valign="top"><a href="#group">Group</a></td>
<td></td>
</tr>
</tbody>
</table>

### PermissionGroupError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#permissiongrouperrorcode">PermissionGroupErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permissionenum">PermissionEnum</a>!]</td>
<td>

List of permissions which causes the error.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>users</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of user IDs which causes the error.

</td>
</tr>
</tbody>
</table>

### PermissionGroupUpdate

Update permission group.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissionGroupErrors</strong></td>
<td valign="top">[<a href="#permissiongrouperror">PermissionGroupError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>group</strong></td>
<td valign="top"><a href="#group">Group</a></td>
<td></td>
</tr>
</tbody>
</table>

### Plugin

Plugin.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>active</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>configuration</strong></td>
<td valign="top">[<a href="#configurationitem">ConfigurationItem</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### PluginCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#plugincountableedge">PluginCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### PluginCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#plugin">Plugin</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### PluginError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#pluginerrorcode">PluginErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### PluginUpdate

Update plugin configuration.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>plugin</strong></td>
<td valign="top"><a href="#plugin">Plugin</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pluginsErrors</strong></td>
<td valign="top">[<a href="#pluginerror">PluginError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Product

Represents an individual item for sale in the storefront.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicationDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPublished</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chargeTaxes</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weight">Weight</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableForPurchase</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInListings</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong> ⚠️</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The storefront URL for the product.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>thumbnail</strong></td>
<td valign="top"><a href="#image">Image</a></td>
<td>

The main thumbnail for a product.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">size</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Size of thumbnail.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pricing</strong></td>
<td valign="top"><a href="#productpricinginfo">ProductPricingInfo</a></td>
<td>

Lists the storefront product's pricing, the current price and discounts, only meant for displaying.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAvailable</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the product is in stock and visible or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minimalVariantPrice</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

The price of the cheapest variant (including discounts).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxType</strong></td>
<td valign="top"><a href="#taxtype">TaxType</a></td>
<td>

A type of tax. Assigned by enabled tax gateway

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#selectedattribute">SelectedAttribute</a>!]!</td>
<td>

List of attributes assigned to this product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>purchaseCost</strong></td>
<td valign="top"><a href="#moneyrange">MoneyRange</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>margin</strong></td>
<td valign="top"><a href="#margin">Margin</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>imageById</strong></td>
<td valign="top"><a href="#productimage">ProductImage</a></td>
<td>

Get a single product image by ID.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of a product image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variants</strong></td>
<td valign="top">[<a href="#productvariant">ProductVariant</a>]</td>
<td>

List of variants for the product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#productimage">ProductImage</a>]</td>
<td>

List of images for the product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top">[<a href="#collection">Collection</a>]</td>
<td>

List of collections for the product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#producttranslation">ProductTranslation</a></td>
<td>

Returns translated product fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAvailableForPurchase</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the product is available for purchase.

</td>
</tr>
</tbody>
</table>

### ProductAttributeError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#producterrorcode">ProductErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of attributes IDs which causes the error.

</td>
</tr>
</tbody>
</table>

### ProductBulkDelete

Deletes products.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductBulkPublish

Publish products.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductClearMeta

Clears public metadata item for product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductClearPrivateMeta

Clears private metadata item for product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#productcountableedge">ProductCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### ProductCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### ProductCreate

Creates a new product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductDelete

Deletes a product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#producterrorcode">ProductErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### ProductImage

Represents a product image.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortOrder</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>alt</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The URL of the image.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">size</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Size of the image.

</td>
</tr>
</tbody>
</table>

### ProductImageBulkDelete

Deletes product images.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductImageCreate

Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#productimage">ProductImage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductImageDelete

Deletes a product image.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#productimage">ProductImage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductImageReorder

Changes ordering of the product image.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#productimage">ProductImage</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductImageUpdate

Updates a product image.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#productimage">ProductImage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductPricingInfo

Represents availability of a product in the storefront.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>onSale</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether it is in sale or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discount</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The discount amount if in sale (null otherwise).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountLocalCurrency</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The discount amount in the local currency.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priceRange</strong></td>
<td valign="top"><a href="#taxedmoneyrange">TaxedMoneyRange</a></td>
<td>

The discounted price range of the product variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priceRangeUndiscounted</strong></td>
<td valign="top"><a href="#taxedmoneyrange">TaxedMoneyRange</a></td>
<td>

The undiscounted price range of the product variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priceRangeLocalCurrency</strong></td>
<td valign="top"><a href="#taxedmoneyrange">TaxedMoneyRange</a></td>
<td>

The discounted price range of the product variants in the local currency.

</td>
</tr>
</tbody>
</table>

### ProductSetAvailabilityForPurchase

Set product availability for purchase date.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#producttranslation">ProductTranslation</a></td>
<td>

Returns translated product fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td>

Represents an individual item for sale in the storefront.

</td>
</tr>
</tbody>
</table>

### ProductTranslate

Creates/Updates translations for Product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### ProductType

Represents a type of product. It defines what attributes are available to products of this type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasVariants</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isShippingRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDigital</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weight">Weight</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top"><a href="#productcountableconnection">ProductCountableConnection</a></td>
<td>

List of products of this type.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxRate</strong></td>
<td valign="top"><a href="#taxratetype">TaxRateType</a></td>
<td>

A type of tax rate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxType</strong></td>
<td valign="top"><a href="#taxtype">TaxType</a></td>
<td>

A type of tax. Assigned by enabled tax gateway

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variantAttributes</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>]</td>
<td>

Variant attributes of that product type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productAttributes</strong></td>
<td valign="top">[<a href="#attribute">Attribute</a>]</td>
<td>

Product attributes of that product type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableAttributes</strong></td>
<td valign="top"><a href="#attributecountableconnection">AttributeCountableConnection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#attributefilterinput">AttributeFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
</tbody>
</table>

### ProductTypeBulkDelete

Deletes product types.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeClearMeta

Clears public metadata for product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeClearPrivateMeta

Clears private metadata for product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#producttypecountableedge">ProductTypeCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### ProductTypeCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#producttype">ProductType</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### ProductTypeCreate

Creates a new product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeDelete

Deletes a product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeReorderAttributes

Reorder the attributes of a product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td>

Product type from which attributes are reordered.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeUpdate

Updates an existing product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeUpdateMeta

Update public metadata for product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeUpdatePrivateMeta

Update private metadata for product type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttype">ProductType</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductUpdate

Updates an existing product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductUpdateMeta

Update public metadata for product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductUpdatePrivateMeta

Update private metadata for product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariant

Represents a version of a product such as different size or color.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sku</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackInventory</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weight">Weight</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong> ⚠️</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Quantity of a product available for sale.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the stock field instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantityAllocated</strong> ⚠️</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Quantity allocated for orders.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the stock field instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stockQuantity</strong> ⚠️</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Quantity of a product available for sale.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the quantityAvailable field instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Base price of a product variant. This field is restricted for admins. Use the pricing field to get the public price for customers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pricing</strong></td>
<td valign="top"><a href="#variantpricinginfo">VariantPricingInfo</a></td>
<td>

Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAvailable</strong> ⚠️</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the variant is in stock and visible or not.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the stock field instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#selectedattribute">SelectedAttribute</a>!]!</td>
<td>

List of attributes assigned to this variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>costPrice</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Cost price of the variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>margin</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Gross margin percentage value.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantityOrdered</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Total quantity ordered.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>revenue</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">period</td>
<td valign="top"><a href="#reportingperiod">ReportingPeriod</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#productimage">ProductImage</a>]</td>
<td>

List of images for the product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#productvarianttranslation">ProductVariantTranslation</a></td>
<td>

Returns translated product variant fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>digitalContent</strong></td>
<td valign="top"><a href="#digitalcontent">DigitalContent</a></td>
<td>

Digital content for the product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stocks</strong></td>
<td valign="top">[<a href="#stock">Stock</a>]</td>
<td>

Stocks for the product variant.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countryCode</td>
<td valign="top"><a href="#countrycode">CountryCode</a></td>
<td>

Two-letter ISO 3166-1 country code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantityAvailable</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Quantity of a product available for sale in one checkout.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">countryCode</td>
<td valign="top"><a href="#countrycode">CountryCode</a></td>
<td>

Two-letter ISO 3166-1 country code. When provided, the exact quantity from a warehouse operating in shipping zones that contain this country will be returned. Otherwise, it will return the maximum quantity from all shipping zones.

</td>
</tr>
</tbody>
</table>

### ProductVariantBulkCreate

Creates product variants for a given product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariants</strong></td>
<td valign="top">[<a href="#productvariant">ProductVariant</a>!]!</td>
<td>

List of the created variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bulkProductErrors</strong></td>
<td valign="top">[<a href="#bulkproducterror">BulkProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantBulkDelete

Deletes product variants.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantClearMeta

Clears public metadata for product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantClearPrivateMeta

Clears private metadata for product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#productvariantcountableedge">ProductVariantCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### ProductVariantCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### ProductVariantCreate

Creates a new variant for a product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantDelete

Deletes a product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantReorder

Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantSetDefault

Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantStocksCreate

Creates stocks for product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td>

Updated product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bulkStockErrors</strong></td>
<td valign="top">[<a href="#bulkstockerror">BulkStockError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantStocksDelete

Delete stocks from product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td>

Updated product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stockErrors</strong></td>
<td valign="top">[<a href="#stockerror">StockError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantStocksUpdate

Update stocks for product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td>

Updated product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bulkStockErrors</strong></td>
<td valign="top">[<a href="#bulkstockerror">BulkStockError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#productvarianttranslation">ProductVariantTranslation</a></td>
<td>

Returns translated product variant fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for product variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td>

Represents a version of a product such as different size or color.

</td>
</tr>
</tbody>
</table>

### ProductVariantTranslate

Creates/Updates translations for Product Variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### ProductVariantUpdate

Updates an existing variant for product.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantUpdateMeta

Update public metadata for product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductVariantUpdatePrivateMeta

Update private metadata for product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReducedRate

Represents a reduced VAT rate for a particular type of goods.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>rate</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

Reduced VAT rate in percent.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rateType</strong></td>
<td valign="top"><a href="#taxratetype">TaxRateType</a>!</td>
<td>

A type of goods.

</td>
</tr>
</tbody>
</table>

### RefreshToken

Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

JWT token, required to authenticate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### RequestEmailChange

Request email change of the logged in user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### RequestPasswordReset

Sends an email with the account password modification link.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Sale

Sales allow creating discounts for categories, collections or products and are visible to all the customers.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#saletype">SaleType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top"><a href="#categorycountableconnection">CategoryCountableConnection</a></td>
<td>

List of categories this sale applies to.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectioncountableconnection">CollectionCountableConnection</a></td>
<td>

List of collections this sale applies to.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top"><a href="#productcountableconnection">ProductCountableConnection</a></td>
<td>

List of products this sale applies to.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#saletranslation">SaleTranslation</a></td>
<td>

Returns translated sale fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for sale.

</td>
</tr>
</tbody>
</table>

### SaleAddCatalogues

Adds products, categories, collections to a voucher.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sale</strong></td>
<td valign="top"><a href="#sale">Sale</a></td>
<td>

Sale of which catalogue IDs will be modified.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### SaleBulkDelete

Deletes sales.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### SaleCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#salecountableedge">SaleCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### SaleCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#sale">Sale</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### SaleCreate

Creates a new sale.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sale</strong></td>
<td valign="top"><a href="#sale">Sale</a></td>
<td></td>
</tr>
</tbody>
</table>

### SaleDelete

Deletes a sale.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sale</strong></td>
<td valign="top"><a href="#sale">Sale</a></td>
<td></td>
</tr>
</tbody>
</table>

### SaleRemoveCatalogues

Removes products, categories, collections from a sale.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sale</strong></td>
<td valign="top"><a href="#sale">Sale</a></td>
<td>

Sale of which catalogue IDs will be modified.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### SaleTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#saletranslation">SaleTranslation</a></td>
<td>

Returns translated sale fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for sale.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sale</strong></td>
<td valign="top"><a href="#sale">Sale</a></td>
<td>

Sales allow creating discounts for categories, collections or products and are visible to all the customers.

</td>
</tr>
</tbody>
</table>

### SaleTranslate

Creates/updates translations for a sale.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sale</strong></td>
<td valign="top"><a href="#sale">Sale</a></td>
<td></td>
</tr>
</tbody>
</table>

### SaleTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### SaleUpdate

Updates a sale.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sale</strong></td>
<td valign="top"><a href="#sale">Sale</a></td>
<td></td>
</tr>
</tbody>
</table>

### SelectedAttribute

Represents a custom attribute.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>attribute</strong></td>
<td valign="top"><a href="#attribute">Attribute</a>!</td>
<td>

Name of an attribute displayed in the interface.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>values</strong></td>
<td valign="top">[<a href="#attributevalue">AttributeValue</a>]!</td>
<td>

Values of an attribute.

</td>
</tr>
</tbody>
</table>

### ServiceAccount

Represents service account data.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the service account.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

The date and time when the service account was created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determine if service account will be set active or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permission">Permission</a>]</td>
<td>

List of the service's permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokens</strong></td>
<td valign="top">[<a href="#serviceaccounttoken">ServiceAccountToken</a>]</td>
<td>

Last 4 characters of the tokens.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
</tbody>
</table>

### ServiceAccountClearPrivateMeta

Clear private metadata for a service account.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong></td>
<td valign="top"><a href="#serviceaccount">ServiceAccount</a></td>
<td></td>
</tr>
</tbody>
</table>

### ServiceAccountCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#serviceaccountcountableedge">ServiceAccountCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### ServiceAccountCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#serviceaccount">ServiceAccount</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### ServiceAccountCreate

Creates a new service account.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The newly created authentication token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong></td>
<td valign="top"><a href="#serviceaccount">ServiceAccount</a></td>
<td></td>
</tr>
</tbody>
</table>

### ServiceAccountDelete

Deletes a service account.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong></td>
<td valign="top"><a href="#serviceaccount">ServiceAccount</a></td>
<td></td>
</tr>
</tbody>
</table>

### ServiceAccountToken

Represents token data.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the authenticated token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Last 4 characters of the token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
</tbody>
</table>

### ServiceAccountTokenCreate

Creates a new token.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The newly created authentication token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccountToken</strong></td>
<td valign="top"><a href="#serviceaccounttoken">ServiceAccountToken</a></td>
<td></td>
</tr>
</tbody>
</table>

### ServiceAccountTokenDelete

Deletes an authentication token assigned to service account.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccountToken</strong></td>
<td valign="top"><a href="#serviceaccounttoken">ServiceAccountToken</a></td>
<td></td>
</tr>
</tbody>
</table>

### ServiceAccountUpdate

Updates an existing service account.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong></td>
<td valign="top"><a href="#serviceaccount">ServiceAccount</a></td>
<td></td>
</tr>
</tbody>
</table>

### ServiceAccountUpdatePrivateMeta

Updates private metadata for a service account.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong></td>
<td valign="top"><a href="#serviceaccount">ServiceAccount</a></td>
<td></td>
</tr>
</tbody>
</table>

### SetPassword

Sets the user's password from the token sent by email using the RequestPasswordReset mutation.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

JWT token, required to authenticate.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>refreshToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

JWT refresh token, required to re-generate access token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>csrfToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

CSRF token required to re-generate access token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

A user instance.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ShippingError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#shippingerrorcode">ShippingErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouses</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of warehouse IDs which causes the error.

</td>
</tr>
</tbody>
</table>

### ShippingMethod

Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minimumOrderPrice</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maximumOrderPrice</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minimumOrderWeight</strong></td>
<td valign="top"><a href="#weight">Weight</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maximumOrderWeight</strong></td>
<td valign="top"><a href="#weight">Weight</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#shippingmethodtypeenum">ShippingMethodTypeEnum</a></td>
<td>

Type of the shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#shippingmethodtranslation">ShippingMethodTranslation</a></td>
<td>

Returns translated shipping method fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for shipping method.

</td>
</tr>
</tbody>
</table>

### ShippingMethodTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#shippingmethodtranslation">ShippingMethodTranslation</a></td>
<td>

Returns translated shipping method fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#shippingmethod">ShippingMethod</a></td>
<td>

Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers.

</td>
</tr>
</tbody>
</table>

### ShippingMethodTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### ShippingPriceBulkDelete

Deletes shipping prices.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingErrors</strong></td>
<td valign="top">[<a href="#shippingerror">ShippingError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ShippingPriceCreate

Creates a new shipping price.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZone</strong></td>
<td valign="top"><a href="#shippingzone">ShippingZone</a></td>
<td>

A shipping zone to which the shipping method belongs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingErrors</strong></td>
<td valign="top">[<a href="#shippingerror">ShippingError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#shippingmethod">ShippingMethod</a></td>
<td></td>
</tr>
</tbody>
</table>

### ShippingPriceDelete

Deletes a shipping price.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#shippingmethod">ShippingMethod</a></td>
<td>

A shipping method to delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZone</strong></td>
<td valign="top"><a href="#shippingzone">ShippingZone</a></td>
<td>

A shipping zone to which the shipping method belongs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingErrors</strong></td>
<td valign="top">[<a href="#shippingerror">ShippingError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ShippingPriceTranslate

Creates/Updates translations for shipping method.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#shippingmethod">ShippingMethod</a></td>
<td></td>
</tr>
</tbody>
</table>

### ShippingPriceUpdate

Updates a new shipping price.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZone</strong></td>
<td valign="top"><a href="#shippingzone">ShippingZone</a></td>
<td>

A shipping zone to which the shipping method belongs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingErrors</strong></td>
<td valign="top">[<a href="#shippingerror">ShippingError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#shippingmethod">ShippingMethod</a></td>
<td></td>
</tr>
</tbody>
</table>

### ShippingZone

Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>default</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priceRange</strong></td>
<td valign="top"><a href="#moneyrange">MoneyRange</a></td>
<td>

Lowest and highest prices for the shipping.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countries</strong></td>
<td valign="top">[<a href="#countrydisplay">CountryDisplay</a>]</td>
<td>

List of countries available for the method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethods</strong></td>
<td valign="top">[<a href="#shippingmethod">ShippingMethod</a>]</td>
<td>

List of shipping methods available for orders shipped to countries within this shipping zone.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouses</strong></td>
<td valign="top">[<a href="#warehouse">Warehouse</a>]</td>
<td>

List of warehouses for shipping zone.

</td>
</tr>
</tbody>
</table>

### ShippingZoneBulkDelete

Deletes shipping zones.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingErrors</strong></td>
<td valign="top">[<a href="#shippingerror">ShippingError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ShippingZoneCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#shippingzonecountableedge">ShippingZoneCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### ShippingZoneCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#shippingzone">ShippingZone</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### ShippingZoneCreate

Creates a new shipping zone.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingErrors</strong></td>
<td valign="top">[<a href="#shippingerror">ShippingError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZone</strong></td>
<td valign="top"><a href="#shippingzone">ShippingZone</a></td>
<td></td>
</tr>
</tbody>
</table>

### ShippingZoneDelete

Deletes a shipping zone.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingErrors</strong></td>
<td valign="top">[<a href="#shippingerror">ShippingError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZone</strong></td>
<td valign="top"><a href="#shippingzone">ShippingZone</a></td>
<td></td>
</tr>
</tbody>
</table>

### ShippingZoneUpdate

Updates a new shipping zone.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingErrors</strong></td>
<td valign="top">[<a href="#shippingerror">ShippingError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZone</strong></td>
<td valign="top"><a href="#shippingzone">ShippingZone</a></td>
<td></td>
</tr>
</tbody>
</table>

### Shop

Represents a shop resource containing general shop data and configuration.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>availablePaymentGateways</strong></td>
<td valign="top">[<a href="#paymentgateway">PaymentGateway</a>!]!</td>
<td>

List of available payment gateways.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">currency</td>
<td valign="top"><a href="#string">String</a></td>
<td>

A currency for which gateways will be returned.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>geolocalization</strong></td>
<td valign="top"><a href="#geolocalization">Geolocalization</a></td>
<td>

Customer's geolocalization data.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>authorizationKeys</strong></td>
<td valign="top">[<a href="#authorizationkey">AuthorizationKey</a>]!</td>
<td>

List of configured authorization keys. Authorization keys are used to enable third-party OAuth authorization (currently Facebook or Google).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countries</strong></td>
<td valign="top">[<a href="#countrydisplay">CountryDisplay</a>!]!</td>
<td>

List of countries available in the shop.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a></td>
<td>

A language code to return the translation for.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currencies</strong></td>
<td valign="top">[<a href="#string">String</a>]!</td>
<td>

List of available currencies.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultCurrency</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Shop's default currency.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultCountry</strong></td>
<td valign="top"><a href="#countrydisplay">CountryDisplay</a></td>
<td>

Shop's default country.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultMailSenderName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Default shop's email sender's name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultMailSenderAddress</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Default shop's email sender's address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Shop's description.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>domain</strong></td>
<td valign="top"><a href="#domain">Domain</a>!</td>
<td>

Shop's domain data.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>homepageCollection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>

Collection displayed on homepage.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>languages</strong></td>
<td valign="top">[<a href="#languagedisplay">LanguageDisplay</a>]!</td>
<td>

List of the shops's supported languages.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Shop's name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>navigation</strong></td>
<td valign="top"><a href="#navigation">Navigation</a></td>
<td>

Shop's navigation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permission">Permission</a>]!</td>
<td>

List of available permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phonePrefixes</strong></td>
<td valign="top">[<a href="#string">String</a>]!</td>
<td>

List of possible phone prefixes.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>headerText</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Header text.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>includeTaxesInPrices</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Include taxes in prices.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayGrossPrices</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Display prices with tax in store.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chargeTaxesOnShipping</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Charge taxes on shipping.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackInventoryByDefault</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Enable inventory tracking.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultWeightUnit</strong></td>
<td valign="top"><a href="#weightunitsenum">WeightUnitsEnum</a></td>
<td>

Default weight unit.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#shoptranslation">ShopTranslation</a></td>
<td>

Returns translated shop fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>automaticFulfillmentDigitalProducts</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Enable automatic fulfillment for all digital products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultDigitalMaxDownloads</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Default number of max downloads per digital content URL.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultDigitalUrlValidDays</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Default number of days which digital content URL will be valid.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyAddress</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td>

Company address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerSetPasswordUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL of a view where customers can set their password.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffNotificationRecipients</strong></td>
<td valign="top">[<a href="#staffnotificationrecipient">StaffNotificationRecipient</a>]</td>
<td>

List of staff notification recipients.

</td>
</tr>
</tbody>
</table>

### ShopAddressUpdate

Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shop</strong></td>
<td valign="top"><a href="#shop">Shop</a></td>
<td>

Updated shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ShopDomainUpdate

Updates site domain of the shop.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shop</strong></td>
<td valign="top"><a href="#shop">Shop</a></td>
<td>

Updated shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ShopError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#shoperrorcode">ShopErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### ShopFetchTaxRates

Fetch tax rates.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shop</strong></td>
<td valign="top"><a href="#shop">Shop</a></td>
<td>

Updated shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ShopSettingsTranslate

Creates/Updates translations for Shop Settings.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shop</strong></td>
<td valign="top"><a href="#shop">Shop</a></td>
<td>

Updated shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ShopSettingsUpdate

Updates shop settings.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shop</strong></td>
<td valign="top"><a href="#shop">Shop</a></td>
<td>

Updated shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ShopTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>headerText</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### StaffBulkDelete

Deletes staff users.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffErrors</strong></td>
<td valign="top">[<a href="#stafferror">StaffError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### StaffCreate

Creates a new staff user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffErrors</strong></td>
<td valign="top">[<a href="#stafferror">StaffError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### StaffDelete

Deletes a staff user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffErrors</strong></td>
<td valign="top">[<a href="#stafferror">StaffError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### StaffError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#accounterrorcode">AccountErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permissionenum">PermissionEnum</a>!]</td>
<td>

List of permissions which causes the error.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>groups</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of permission group IDs which cause the error.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>users</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of user IDs which causes the error.

</td>
</tr>
</tbody>
</table>

### StaffNotificationRecipient

Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Returns a user subscribed to email notifications.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>active</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if a notification active.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Returns email address of a user subscribed to email notifications.

</td>
</tr>
</tbody>
</table>

### StaffNotificationRecipientCreate

Creates a new staff notification recipient.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffNotificationRecipient</strong></td>
<td valign="top"><a href="#staffnotificationrecipient">StaffNotificationRecipient</a></td>
<td></td>
</tr>
</tbody>
</table>

### StaffNotificationRecipientDelete

Delete staff notification recipient.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffNotificationRecipient</strong></td>
<td valign="top"><a href="#staffnotificationrecipient">StaffNotificationRecipient</a></td>
<td></td>
</tr>
</tbody>
</table>

### StaffNotificationRecipientUpdate

Updates a staff notification recipient.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shopErrors</strong></td>
<td valign="top">[<a href="#shoperror">ShopError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffNotificationRecipient</strong></td>
<td valign="top"><a href="#staffnotificationrecipient">StaffNotificationRecipient</a></td>
<td></td>
</tr>
</tbody>
</table>

### StaffUpdate

Updates an existing staff user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>staffErrors</strong></td>
<td valign="top">[<a href="#stafferror">StaffError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### Stock

Represents stock.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantityAllocated</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Quantity allocated for orders

</td>
</tr>
</tbody>
</table>

### StockCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#stockcountableedge">StockCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### StockCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#stock">Stock</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### StockError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#stockerrorcode">StockErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### TaxType

Representation of tax types fetched from tax gateway.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Description of the tax type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

External tax code used to identify given tax group.

</td>
</tr>
</tbody>
</table>

### TaxedMoney

Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>currency</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Currency code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gross</strong></td>
<td valign="top"><a href="#money">Money</a>!</td>
<td>

Amount of money including taxes.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>net</strong></td>
<td valign="top"><a href="#money">Money</a>!</td>
<td>

Amount of money without taxes.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tax</strong></td>
<td valign="top"><a href="#money">Money</a>!</td>
<td>

Amount of taxes.

</td>
</tr>
</tbody>
</table>

### TaxedMoneyRange

Represents a range of monetary values.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

Lower bound of a price range.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stop</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

Upper bound of a price range.

</td>
</tr>
</tbody>
</table>

### Transaction

An object representing a single payment.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payment</strong></td>
<td valign="top"><a href="#payment">Payment</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>kind</strong></td>
<td valign="top"><a href="#transactionkind">TransactionKind</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSuccess</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>error</strong></td>
<td valign="top"><a href="#transactionerror">TransactionError</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td>

Total amount of the transaction.

</td>
</tr>
</tbody>
</table>

### TranslatableItemConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#translatableitemedge">TranslatableItemEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### TranslatableItemEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#translatableitem">TranslatableItem</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### TranslationError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#translationerrorcode">TranslationErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### UpdateMetadata

Updates metadata of an object.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadataErrors</strong></td>
<td valign="top">[<a href="#metadataerror">MetadataError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>item</strong></td>
<td valign="top"><a href="#objectwithmetadata">ObjectWithMetadata</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdatePrivateMetadata

Updates private metadata of an object.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadataErrors</strong></td>
<td valign="top">[<a href="#metadataerror">MetadataError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>item</strong></td>
<td valign="top"><a href="#objectwithmetadata">ObjectWithMetadata</a></td>
<td></td>
</tr>
</tbody>
</table>

### User

Represents user data.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastLogin</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isStaff</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>note</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A note about the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dateJoined</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultShippingAddress</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultBillingAddress</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addresses</strong></td>
<td valign="top">[<a href="#address">Address</a>]</td>
<td>

List of all user's addresses.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkout</strong></td>
<td valign="top"><a href="#checkout">Checkout</a></td>
<td>

Returns the last open checkout of this user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>giftCards</strong></td>
<td valign="top"><a href="#giftcardcountableconnection">GiftCardCountableConnection</a></td>
<td>

List of the user gift cards.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orders</strong></td>
<td valign="top"><a href="#ordercountableconnection">OrderCountableConnection</a></td>
<td>

List of user's orders.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong> ⚠️</td>
<td valign="top">[<a href="#permission">Permission</a>]</td>
<td>

List of user's permissions.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Will be removed in Saleor 2.11.Use the `userPermissions` instead.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userPermissions</strong></td>
<td valign="top">[<a href="#userpermission">UserPermission</a>]</td>
<td>

List of user's permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissionGroups</strong></td>
<td valign="top">[<a href="#group">Group</a>]</td>
<td>

List of user's permission groups.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>editableGroups</strong></td>
<td valign="top">[<a href="#group">Group</a>]</td>
<td>

List of user's permission groups which user can manage.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>avatar</strong></td>
<td valign="top"><a href="#image">Image</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">size</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Size of the avatar.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top">[<a href="#customerevent">CustomerEvent</a>]</td>
<td>

List of events associated with the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>storedPaymentSources</strong></td>
<td valign="top">[<a href="#paymentsource">PaymentSource</a>]</td>
<td>

List of stored payment sources.

</td>
</tr>
</tbody>
</table>

### UserAvatarDelete

Deletes a user avatar. Only for staff members.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

An updated user instance.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UserAvatarUpdate

Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

An updated user instance.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UserBulkSetActive

Activate or deactivate users.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UserClearMeta

Clear metadata for user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### UserClearPrivateMeta

Clear private metadata for user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### UserCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#usercountableedge">UserCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### UserCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#user">User</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### UserPermission

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#permissionenum">PermissionEnum</a>!</td>
<td>

Internal code for permission.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Describe action(s) allowed to do by permission.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourcePermissionGroups</strong></td>
<td valign="top">[<a href="#group">Group</a>!]</td>
<td>

List of user permission groups which contains this permission.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of user whose groups should be returned.

</td>
</tr>
</tbody>
</table>

### UserUpdateMeta

Updates metadata for user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### UserUpdatePrivateMeta

Updates private metadata for user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### VAT

Represents a VAT rate for a country.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>countryCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Country code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>standardRate</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Standard VAT rate in percent.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reducedRates</strong></td>
<td valign="top">[<a href="#reducedrate">ReducedRate</a>]!</td>
<td>

Country's VAT rate exceptions for specific types of goods.

</td>
</tr>
</tbody>
</table>

### VariantImageAssign

Assign an image to a product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#productimage">ProductImage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### VariantImageUnassign

Unassign an image from a product variant.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productVariant</strong></td>
<td valign="top"><a href="#productvariant">ProductVariant</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#productimage">ProductImage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productErrors</strong></td>
<td valign="top">[<a href="#producterror">ProductError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### VariantPricingInfo

Represents availability of a variant in the storefront.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>onSale</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether it is in sale or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discount</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The discount amount if in sale (null otherwise).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountLocalCurrency</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The discount amount in the local currency.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The price, with any discount subtracted.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priceUndiscounted</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The price without any discount.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priceLocalCurrency</strong></td>
<td valign="top"><a href="#taxedmoney">TaxedMoney</a></td>
<td>

The discounted price in the local currency.

</td>
</tr>
</tbody>
</table>

### VerifyToken

Verify JWT token.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

User assigned to token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isValid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Determine if token is valid or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>payload</strong></td>
<td valign="top"><a href="#genericscalar">GenericScalar</a></td>
<td>

JWT payload.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountErrors</strong></td>
<td valign="top">[<a href="#accounterror">AccountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Voucher

Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#vouchertypeenum">VoucherTypeEnum</a>!</td>
<td>

Determines a type of voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>usageLimit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>used</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>applyOncePerOrder</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>applyOncePerCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountValueType</strong></td>
<td valign="top"><a href="#discountvaluetypeenum">DiscountValueTypeEnum</a>!</td>
<td>

Determines a type of discount for voucher - value or percentage

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountValue</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minSpent</strong></td>
<td valign="top"><a href="#money">Money</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minCheckoutItemsQuantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top"><a href="#categorycountableconnection">CategoryCountableConnection</a></td>
<td>

List of categories this voucher applies to.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectioncountableconnection">CollectionCountableConnection</a></td>
<td>

List of collections this voucher applies to.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top"><a href="#productcountableconnection">ProductCountableConnection</a></td>
<td>

List of products this voucher applies to.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come before the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Return the elements in the list that come after the specified cursor.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the first n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Return the last n elements from the list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countries</strong></td>
<td valign="top">[<a href="#countrydisplay">CountryDisplay</a>]</td>
<td>

List of countries available for the shipping voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#vouchertranslation">VoucherTranslation</a></td>
<td>

Returns translated voucher fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for voucher.

</td>
</tr>
</tbody>
</table>

### VoucherAddCatalogues

Adds products, categories, collections to a voucher.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#voucher">Voucher</a></td>
<td>

Voucher of which catalogue IDs will be modified.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### VoucherBulkDelete

Deletes vouchers.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Returns how many objects were affected.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### VoucherCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#vouchercountableedge">VoucherCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### VoucherCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#voucher">Voucher</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### VoucherCreate

Creates a new voucher.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#voucher">Voucher</a></td>
<td></td>
</tr>
</tbody>
</table>

### VoucherDelete

Deletes a voucher.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#voucher">Voucher</a></td>
<td></td>
</tr>
</tbody>
</table>

### VoucherRemoveCatalogues

Removes products, categories, collections from a voucher.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#voucher">Voucher</a></td>
<td>

Voucher of which catalogue IDs will be modified.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### VoucherTranslatableContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translation</strong></td>
<td valign="top"><a href="#vouchertranslation">VoucherTranslation</a></td>
<td>

Returns translated voucher fields for the given language code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">languageCode</td>
<td valign="top"><a href="#languagecodeenum">LanguageCodeEnum</a>!</td>
<td>

A language code to return the translation for voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#voucher">Voucher</a></td>
<td>

Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.

</td>
</tr>
</tbody>
</table>

### VoucherTranslate

Creates/Updates translations for Voucher.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>translationErrors</strong></td>
<td valign="top">[<a href="#translationerror">TranslationError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#voucher">Voucher</a></td>
<td></td>
</tr>
</tbody>
</table>

### VoucherTranslation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#languagedisplay">LanguageDisplay</a>!</td>
<td>

Translation language.

</td>
</tr>
</tbody>
</table>

### VoucherUpdate

Updates a voucher.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountErrors</strong></td>
<td valign="top">[<a href="#discounterror">DiscountError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#voucher">Voucher</a></td>
<td></td>
</tr>
</tbody>
</table>

### Warehouse

Represents warehouse.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZones</strong></td>
<td valign="top"><a href="#shippingzonecountableconnection">ShippingZoneCountableConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### WarehouseCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#warehousecountableedge">WarehouseCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### WarehouseCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### WarehouseCreate

Creates new warehouse.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouseErrors</strong></td>
<td valign="top">[<a href="#warehouseerror">WarehouseError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a></td>
<td></td>
</tr>
</tbody>
</table>

### WarehouseDelete

Deletes selected warehouse.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouseErrors</strong></td>
<td valign="top">[<a href="#warehouseerror">WarehouseError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a></td>
<td></td>
</tr>
</tbody>
</table>

### WarehouseError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#warehouseerrorcode">WarehouseErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### WarehouseShippingZoneAssign

Add shipping zone to given warehouse.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouseErrors</strong></td>
<td valign="top">[<a href="#warehouseerror">WarehouseError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a></td>
<td></td>
</tr>
</tbody>
</table>

### WarehouseShippingZoneUnassign

Remove shipping zone from given warehouse.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouseErrors</strong></td>
<td valign="top">[<a href="#warehouseerror">WarehouseError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a></td>
<td></td>
</tr>
</tbody>
</table>

### WarehouseUpdate

Updates given warehouse.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouseErrors</strong></td>
<td valign="top">[<a href="#warehouseerror">WarehouseError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#warehouse">Warehouse</a></td>
<td></td>
</tr>
</tbody>
</table>

### Webhook

Webhook.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>targetUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>secretKey</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top">[<a href="#webhookevent">WebhookEvent</a>!]!</td>
<td>

List of webhook events.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong> ⚠️</td>
<td valign="top"><a href="#serviceaccount">ServiceAccount</a>!</td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `app` field instead. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#app">App</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### WebhookCountableConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>

Pagination data for this connection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#webhookcountableedge">WebhookCountableEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

A total count of items in the collection.

</td>
</tr>
</tbody>
</table>

### WebhookCountableEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#webhook">Webhook</a>!</td>
<td>

The item at the end of the edge.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A cursor for use in pagination.

</td>
</tr>
</tbody>
</table>

### WebhookCreate

Creates a new webhook subscription.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhookErrors</strong></td>
<td valign="top">[<a href="#webhookerror">WebhookError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhook</strong></td>
<td valign="top"><a href="#webhook">Webhook</a></td>
<td></td>
</tr>
</tbody>
</table>

### WebhookDelete

Deletes a webhook subscription.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhookErrors</strong></td>
<td valign="top">[<a href="#webhookerror">WebhookError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhook</strong></td>
<td valign="top"><a href="#webhook">Webhook</a></td>
<td></td>
</tr>
</tbody>
</table>

### WebhookError

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The error message.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#webhookerrorcode">WebhookErrorCode</a>!</td>
<td>

The error code.

</td>
</tr>
</tbody>
</table>

### WebhookEvent

Webhook event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>eventType</strong></td>
<td valign="top"><a href="#webhookeventtypeenum">WebhookEventTypeEnum</a>!</td>
<td>

Internal name of the event type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Display name of the event.

</td>
</tr>
</tbody>
</table>

### WebhookUpdate

Updates a webhook subscription.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errors</strong> ⚠️</td>
<td valign="top">[<a href="#error">Error</a>!]!</td>
<td>

List of errors that occurred executing the mutation.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use typed errors with error codes. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhookErrors</strong></td>
<td valign="top">[<a href="#webhookerror">WebhookError</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webhook</strong></td>
<td valign="top"><a href="#webhook">Webhook</a></td>
<td></td>
</tr>
</tbody>
</table>

### Weight

Represents weight value in a specific weight unit.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>unit</strong></td>
<td valign="top"><a href="#weightunitsenum">WeightUnitsEnum</a>!</td>
<td>

Weight unit.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

Weight value.

</td>
</tr>
</tbody>
</table>

### _Service

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sdl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### AccountInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Given name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Family name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultBillingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Billing address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultShippingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Shipping address of the customer.

</td>
</tr>
</tbody>
</table>

### AccountRegisterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The email address of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Password.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>redirectUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Base of frontend URL that will be needed to create confirmation URL.

</td>
</tr>
</tbody>
</table>

### AddressInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Given name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Family name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Company or organization.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>streetAddress1</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>streetAddress2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

City.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityArea</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

District.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Postal code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#countrycode">CountryCode</a></td>
<td>

Country.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryArea</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

State or province.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Phone number.

</td>
</tr>
</tbody>
</table>

### AppFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#apptypeenum">AppTypeEnum</a></td>
<td></td>
</tr>
</tbody>
</table>

### AppInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

DEPRECATED: Use the `appActivate` and `appDeactivate` mutations instead. This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permissionenum">PermissionEnum</a>]</td>
<td>

List of permission code names to assign to this app.

</td>
</tr>
</tbody>
</table>

### AppInstallInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>appName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the app to install.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manifestUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Url to app's manifest in JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activateAfterInstallation</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determine if app will be set active or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permissionenum">PermissionEnum</a>]</td>
<td>

List of permission code names to assign to this app.

</td>
</tr>
</tbody>
</table>

### AppSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#appsortfield">AppSortField</a>!</td>
<td>

Sort apps by the selected field.

</td>
</tr>
</tbody>
</table>

### AppTokenInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of app.

</td>
</tr>
</tbody>
</table>

### AttributeAssignInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the attribute to assign.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#attributetypeenum">AttributeTypeEnum</a>!</td>
<td>

The attribute type to be assigned as.

</td>
</tr>
</tbody>
</table>

### AttributeCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>inputType</strong></td>
<td valign="top"><a href="#attributeinputtypeenum">AttributeInputTypeEnum</a></td>
<td>

The input type to use for entering attribute values in the dashboard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of an attribute displayed in the interface.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Internal representation of an attribute name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>values</strong></td>
<td valign="top">[<a href="#attributevaluecreateinput">AttributeValueCreateInput</a>]</td>
<td>

List of attribute's values.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valueRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute requires values to be passed or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isVariantOnly</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute is for variants only.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInStorefront</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute should be visible or not in storefront.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>filterableInStorefront</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute can be filtered in storefront.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>filterableInDashboard</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute can be filtered in dashboard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>storefrontSearchPosition</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The position of the attribute in the storefront navigation (0 by default).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableInGrid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute can be displayed in the admin product list.

</td>
</tr>
</tbody>
</table>

### AttributeFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>valueRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isVariantOnly</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInStorefront</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>filterableInStorefront</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>filterableInDashboard</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableInGrid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ids</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>inCollection</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>inCategory</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Internal representation of an attribute name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

[Deprecated] Internal representation of a value (unique per attribute). This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>values</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

Internal representation of a value (unique per attribute).

</td>
</tr>
</tbody>
</table>

### AttributeSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#attributesortfield">AttributeSortField</a>!</td>
<td>

Sort attributes by the selected field.

</td>
</tr>
</tbody>
</table>

### AttributeUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of an attribute displayed in the interface.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Internal representation of an attribute name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>removeValues</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

IDs of values to be removed from this attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addValues</strong></td>
<td valign="top">[<a href="#attributevaluecreateinput">AttributeValueCreateInput</a>]</td>
<td>

New values to be created for this attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valueRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute requires values to be passed or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isVariantOnly</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute is for variants only.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInStorefront</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute should be visible or not in storefront.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>filterableInStorefront</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute can be filtered in storefront.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>filterableInDashboard</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute can be filtered in dashboard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>storefrontSearchPosition</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The position of the attribute in the storefront navigation (0 by default).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableInGrid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Whether the attribute can be displayed in the admin product list.

</td>
</tr>
</tbody>
</table>

### AttributeValueCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of a value displayed in the interface.

</td>
</tr>
</tbody>
</table>

### AttributeValueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the selected attribute.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>values</strong></td>
<td valign="top">[<a href="#string">String</a>]!</td>
<td>

The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created.

</td>
</tr>
</tbody>
</table>

### AuthorizationKeyInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Client authorization key (client ID).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Client secret.

</td>
</tr>
</tbody>
</table>

### CatalogueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Products related to the discount.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Categories related to the discount.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Collections related to the discount.

</td>
</tr>
</tbody>
</table>

### CategoryFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ids</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### CategoryInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Category description (HTML/text).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td>

Category description (JSON).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Category name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Category slug.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seo</strong></td>
<td valign="top"><a href="#seoinput">SeoInput</a></td>
<td>

Search engine optimization fields.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>backgroundImage</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td>

Background image file.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>backgroundImageAlt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alt text for an image.

</td>
</tr>
</tbody>
</table>

### CategorySortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#categorysortfield">CategorySortField</a>!</td>
<td>

Sort categories by the selected field.

</td>
</tr>
</tbody>
</table>

### CheckoutCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>lines</strong></td>
<td valign="top">[<a href="#checkoutlineinput">CheckoutLineInput</a>]!</td>
<td>

A list of checkout lines, each containing information about an item in the checkout.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The customer's email address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>billingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Billing address of the customer.

</td>
</tr>
</tbody>
</table>

### CheckoutLineInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of items purchased.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variantId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the product variant.

</td>
</tr>
</tbody>
</table>

### CollectionCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>isPublished</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Informs whether a collection is published.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the collection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Slug of the collection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Description of the collection (HTML/text).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td>

Description of the collection (JSON).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>backgroundImage</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td>

Background image file.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>backgroundImageAlt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alt text for an image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seo</strong></td>
<td valign="top"><a href="#seoinput">SeoInput</a></td>
<td>

Search engine optimization fields.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicationDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

Publication date. ISO 8601 standard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

List of products to be added to the collection.

</td>
</tr>
</tbody>
</table>

### CollectionFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>published</strong></td>
<td valign="top"><a href="#collectionpublished">CollectionPublished</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ids</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### CollectionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>isPublished</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Informs whether a collection is published.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the collection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Slug of the collection.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Description of the collection (HTML/text).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td>

Description of the collection (JSON).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>backgroundImage</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td>

Background image file.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>backgroundImageAlt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alt text for an image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seo</strong></td>
<td valign="top"><a href="#seoinput">SeoInput</a></td>
<td>

Search engine optimization fields.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicationDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

Publication date. ISO 8601 standard.

</td>
</tr>
</tbody>
</table>

### CollectionSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#collectionsortfield">CollectionSortField</a>!</td>
<td>

Sort collections by the selected field.

</td>
</tr>
</tbody>
</table>

### ConfigurationItemInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of the field to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Value of the given field to update.

</td>
</tr>
</tbody>
</table>

### CustomerFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>dateJoined</strong></td>
<td valign="top"><a href="#daterangeinput">DateRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>moneySpent</strong></td>
<td valign="top"><a href="#pricerangeinput">PriceRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberOfOrders</strong></td>
<td valign="top"><a href="#intrangeinput">IntRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>placedOrders</strong></td>
<td valign="top"><a href="#daterangeinput">DateRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>defaultBillingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Billing address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultShippingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Shipping address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Given name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Family name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The unique email address of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

User account is active.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>note</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A note about the user.

</td>
</tr>
</tbody>
</table>

### DateRangeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

Start date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

End date.

</td>
</tr>
</tbody>
</table>

### DateTimeRangeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Start date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

End date.

</td>
</tr>
</tbody>
</table>

### DigitalContentInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>useDefaultSettings</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Use default digital content settings for this product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxDownloads</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Determines how many times a download link can be accessed by a customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>urlValidDays</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Determines for how many days a download link is active since it was generated.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>automaticFulfillment</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Overwrite default automatic_fulfillment setting for variant.

</td>
</tr>
</tbody>
</table>

### DigitalContentUploadInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>useDefaultSettings</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Use default digital content settings for this product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxDownloads</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Determines how many times a download link can be accessed by a customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>urlValidDays</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Determines for how many days a download link is active since it was generated.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>automaticFulfillment</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Overwrite default automatic_fulfillment setting for variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentFile</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td>

Represents an file in a multipart request.

</td>
</tr>
</tbody>
</table>

### DigitalContentUrlCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Digital content ID which URL will belong to.

</td>
</tr>
</tbody>
</table>

### DraftOrderCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>billingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Billing address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userEmail</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discount</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Discount amount for the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Shipping address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of a selected shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the voucher associated with the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerNote</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A note from a customer. Visible by customers in the order summary.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lines</strong></td>
<td valign="top">[<a href="#orderlinecreateinput">OrderLineCreateInput</a>]</td>
<td>

Variant line input consisting of variant ID and quantity of products.

</td>
</tr>
</tbody>
</table>

### DraftOrderInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>billingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Billing address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userEmail</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discount</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Discount amount for the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Shipping address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of a selected shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>voucher</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the voucher associated with the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerNote</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A note from a customer. Visible by customers in the order summary.

</td>
</tr>
</tbody>
</table>

### ExportFileFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimerangeinput">DateTimeRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetimerangeinput">DateTimeRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#jobstatusenum">JobStatusEnum</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### ExportFileSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#exportfilesortfield">ExportFileSortField</a>!</td>
<td>

Sort export file by the selected field.

</td>
</tr>
</tbody>
</table>

### ExportInfoInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of attribute ids witch should be exported.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouses</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of warehouse ids witch should be exported.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top">[<a href="#productfieldenum">ProductFieldEnum</a>!]</td>
<td>

List of product fields witch should be exported.

</td>
</tr>
</tbody>
</table>

### ExportProductsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>scope</strong></td>
<td valign="top"><a href="#exportscope">ExportScope</a>!</td>
<td>

Determine which products should be exported.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>filter</strong></td>
<td valign="top"><a href="#productfilterinput">ProductFilterInput</a></td>
<td>

Filtering options for products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ids</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of products IDS to export.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exportInfo</strong></td>
<td valign="top"><a href="#exportinfoinput">ExportInfoInput</a></td>
<td>

Input with info about fields which should be exported.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fileType</strong></td>
<td valign="top"><a href="#filetypesenum">FileTypesEnum</a>!</td>
<td>

Type of exported file.

</td>
</tr>
</tbody>
</table>

### FulfillmentCancelInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>warehouseId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of warehouse where items will be restock.

</td>
</tr>
</tbody>
</table>

### FulfillmentUpdateTrackingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>trackingNumber</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Fulfillment tracking number.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notifyCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If true, send an email notification to the customer.

</td>
</tr>
</tbody>
</table>

### GiftCardCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

Start date of the gift card in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

End date of the gift card in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>balance</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Value of the gift card.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userEmail</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The customer's email of the gift card buyer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Code to use the gift card.

</td>
</tr>
</tbody>
</table>

### GiftCardUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

Start date of the gift card in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

End date of the gift card in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>balance</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Value of the gift card.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userEmail</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The customer's email of the gift card buyer.

</td>
</tr>
</tbody>
</table>

### IntRangeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Value greater than or equal to.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Value less than or equal to.

</td>
</tr>
</tbody>
</table>

### InvoiceCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Invoice number.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

URL of an invoice to download.

</td>
</tr>
</tbody>
</table>

### MenuCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of the menu.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>items</strong></td>
<td valign="top">[<a href="#menuiteminput">MenuItemInput</a>]</td>
<td>

List of menu items.

</td>
</tr>
</tbody>
</table>

### MenuFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### MenuInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the menu.

</td>
</tr>
</tbody>
</table>

### MenuItemCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of the menu item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL of the pointed item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Category to which item points.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Collection to which item points.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Page to which item points.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>menu</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Menu to which item belongs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the parent menu. If empty, menu will be top level menu.

</td>
</tr>
</tbody>
</table>

### MenuItemFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### MenuItemInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the menu item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL of the pointed item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Category to which item points.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Collection to which item points.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Page to which item points.

</td>
</tr>
</tbody>
</table>

### MenuItemMoveInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>itemId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The menu item ID to move.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the parent menu. If empty, menu will be top level menu.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortOrder</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged.

</td>
</tr>
</tbody>
</table>

### MenuItemSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#menuitemssortfield">MenuItemsSortField</a>!</td>
<td>

Sort menu items by the selected field.

</td>
</tr>
</tbody>
</table>

### MenuSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#menusortfield">MenuSortField</a>!</td>
<td>

Sort menus by the selected field.

</td>
</tr>
</tbody>
</table>

### MetaInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>namespace</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of metadata client group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>clientName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Metadata client's name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Key for stored data.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Stored metadata value.

</td>
</tr>
</tbody>
</table>

### MetaPath

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>namespace</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of metadata client group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>clientName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Metadata client's name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Key for stored data.

</td>
</tr>
</tbody>
</table>

### MetadataInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Key of a metadata item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Value of a metadata item.

</td>
</tr>
</tbody>
</table>

### MoveProductInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>productId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the product to move.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortOrder</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged.

</td>
</tr>
</tbody>
</table>

### NameTranslationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### OrderAddNoteInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Note message.

</td>
</tr>
</tbody>
</table>

### OrderDraftFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#daterangeinput">DateRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### OrderFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>paymentStatus</strong></td>
<td valign="top">[<a href="#paymentchargestatusenum">PaymentChargeStatusEnum</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top">[<a href="#orderstatusfilter">OrderStatusFilter</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#daterangeinput">DateRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### OrderFulfillInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>lines</strong></td>
<td valign="top">[<a href="#orderfulfilllineinput">OrderFulfillLineInput</a>!]!</td>
<td>

List of items informing how to fulfill the order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notifyCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If true, send an email notification to the customer.

</td>
</tr>
</tbody>
</table>

### OrderFulfillLineInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>orderLineId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The ID of the order line.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stocks</strong></td>
<td valign="top">[<a href="#orderfulfillstockinput">OrderFulfillStockInput</a>!]!</td>
<td>

List of stock items to create.

</td>
</tr>
</tbody>
</table>

### OrderFulfillStockInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The number of line items to be fulfilled from given warehouse.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the warehouse from which the item will be fulfilled.

</td>
</tr>
</tbody>
</table>

### OrderLineCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Number of variant items ordered.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variantId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Product variant ID.

</td>
</tr>
</tbody>
</table>

### OrderLineInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Number of variant items ordered.

</td>
</tr>
</tbody>
</table>

### OrderSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#ordersortfield">OrderSortField</a>!</td>
<td>

Sort orders by the selected field.

</td>
</tr>
</tbody>
</table>

### OrderUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>billingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Billing address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userEmail</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Shipping address of the customer.

</td>
</tr>
</tbody>
</table>

### OrderUpdateShippingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>shippingMethod</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the selected shipping method.

</td>
</tr>
</tbody>
</table>

### PageFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PageInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Page internal name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Page title.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Page content. May consist of ordinary text, HTML and images.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td>

Page content in JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPublished</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if page is visible in the storefront.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Publication date. ISO 8601 standard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seo</strong></td>
<td valign="top"><a href="#seoinput">SeoInput</a></td>
<td>

Search engine optimization fields.

</td>
</tr>
</tbody>
</table>

### PageSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#pagesortfield">PageSortField</a>!</td>
<td>

Sort pages by the selected field.

</td>
</tr>
</tbody>
</table>

### PageTranslationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td></td>
</tr>
</tbody>
</table>

### PaymentInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>gateway</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A gateway to use with that payment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Client-side generated payment token, representing customer's billing data in a secure manner.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>billingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

[Deprecated] Billing address. If empty, the billing address associated with the checkout instance will be used. Use `checkoutCreate` or `checkoutBillingAddressUpdate` mutations to set it. This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>returnUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided.

</td>
</tr>
</tbody>
</table>

### PermissionGroupCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>addPermissions</strong></td>
<td valign="top">[<a href="#permissionenum">PermissionEnum</a>!]</td>
<td>

List of permission code names to assign to this group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addUsers</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of users to assign to this group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Group name.

</td>
</tr>
</tbody>
</table>

### PermissionGroupFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PermissionGroupSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#permissiongroupsortfield">PermissionGroupSortField</a>!</td>
<td>

Sort permission group by the selected field.

</td>
</tr>
</tbody>
</table>

### PermissionGroupUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>addPermissions</strong></td>
<td valign="top">[<a href="#permissionenum">PermissionEnum</a>!]</td>
<td>

List of permission code names to assign to this group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addUsers</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of users to assign to this group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Group name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>removePermissions</strong></td>
<td valign="top">[<a href="#permissionenum">PermissionEnum</a>!]</td>
<td>

List of permission code names to unassign from this group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>removeUsers</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of users to unassign from this group.

</td>
</tr>
</tbody>
</table>

### PluginFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>active</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PluginSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#pluginsortfield">PluginSortField</a>!</td>
<td>

Sort plugins by the selected field.

</td>
</tr>
</tbody>
</table>

### PluginUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>active</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Indicates whether the plugin should be enabled.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>configuration</strong></td>
<td valign="top">[<a href="#configurationiteminput">ConfigurationItemInput</a>]</td>
<td>

Configuration of the plugin.

</td>
</tr>
</tbody>
</table>

### PriceRangeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Price greater than or equal to.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

Price less than or equal to.

</td>
</tr>
</tbody>
</table>

### ProductCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#attributevalueinput">AttributeValueInput</a>]</td>
<td>

List of attributes.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicationDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

Publication date. ISO 8601 standard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the product's category.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chargeTaxes</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determine if taxes are being charged for the product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

List of IDs of collections that the product belongs to.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Product description (HTML/text).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td>

Product description (JSON).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPublished</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if product is visible to customers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Product name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Product slug.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Tax rate for enabled tax gateway.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seo</strong></td>
<td valign="top"><a href="#seoinput">SeoInput</a></td>
<td>

Search engine optimization fields.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weightscalar">WeightScalar</a></td>
<td>

Weight of the Product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sku</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Stock keeping unit of a product. Note: this field is only used if a product doesn't use variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackInventory</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if the inventory of this product should be tracked. If false, the quantity won't change when customers buy this item. Note: this field is only used if a product doesn't use variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>basePrice</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Default price for product variant. Note: this field is only used if a product doesn't use variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInListings</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if product is visible in product listings (doesn't apply to product collections).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the type that product belongs to.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stocks</strong></td>
<td valign="top">[<a href="#stockinput">StockInput</a>!]</td>
<td>

Stocks of a product available for sale. Note: this field is only used if a product doesn't use variants.

</td>
</tr>
</tbody>
</table>

### ProductFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>isPublished</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasCategory</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#attributeinput">AttributeInput</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stockAvailability</strong></td>
<td valign="top"><a href="#stockavailability">StockAvailability</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stocks</strong></td>
<td valign="top"><a href="#productstockfilterinput">ProductStockFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#pricerangeinput">PriceRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minimalPrice</strong></td>
<td valign="top"><a href="#pricerangeinput">PriceRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productTypes</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### ProductImageCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>alt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alt text for an image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td>

Represents an image file in a multipart request.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of an product.

</td>
</tr>
</tbody>
</table>

### ProductImageUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>alt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Alt text for an image.

</td>
</tr>
</tbody>
</table>

### ProductInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#attributevalueinput">AttributeValueInput</a>]</td>
<td>

List of attributes.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicationDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

Publication date. ISO 8601 standard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the product's category.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chargeTaxes</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determine if taxes are being charged for the product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

List of IDs of collections that the product belongs to.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Product description (HTML/text).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td>

Product description (JSON).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPublished</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if product is visible to customers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Product name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Product slug.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Tax rate for enabled tax gateway.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seo</strong></td>
<td valign="top"><a href="#seoinput">SeoInput</a></td>
<td>

Search engine optimization fields.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weightscalar">WeightScalar</a></td>
<td>

Weight of the Product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sku</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Stock keeping unit of a product. Note: this field is only used if a product doesn't use variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackInventory</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if the inventory of this product should be tracked. If false, the quantity won't change when customers buy this item. Note: this field is only used if a product doesn't use variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>basePrice</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Default price for product variant. Note: this field is only used if a product doesn't use variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInListings</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if product is visible in product listings (doesn't apply to product collections).

</td>
</tr>
</tbody>
</table>

### ProductOrder

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributeId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Sort product by the selected attribute's values.
Note: this doesn't take translations into account yet.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#productorderfield">ProductOrderField</a></td>
<td>

Sort products by the selected field.

</td>
</tr>
</tbody>
</table>

### ProductStockFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>warehouseIds</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#intrangeinput">IntRangeInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>configurable</strong></td>
<td valign="top"><a href="#producttypeconfigurable">ProductTypeConfigurable</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productType</strong></td>
<td valign="top"><a href="#producttypeenum">ProductTypeEnum</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ids</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the product type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Product type slug.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasVariants</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productAttributes</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

List of attributes shared among all product variants.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>variantAttributes</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

List of attributes used to distinguish between different variants of a product.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isShippingRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if shipping is required for products of this variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDigital</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if products are digital.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weightscalar">WeightScalar</a></td>
<td>

Weight of the ProductType items.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Tax rate for enabled tax gateway.

</td>
</tr>
</tbody>
</table>

### ProductTypeSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#producttypesortfield">ProductTypeSortField</a>!</td>
<td>

Sort product types by the selected field.

</td>
</tr>
</tbody>
</table>

### ProductVariantBulkCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#attributevalueinput">AttributeValueInput</a>]!</td>
<td>

List of attributes specific to this variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>costPrice</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Cost price of the variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Price of the particular variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sku</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Stock keeping unit.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackInventory</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weightscalar">WeightScalar</a></td>
<td>

Weight of the Product Variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stocks</strong></td>
<td valign="top">[<a href="#stockinput">StockInput</a>!]</td>
<td>

Stocks of a product available for sale.

</td>
</tr>
</tbody>
</table>

### ProductVariantCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#attributevalueinput">AttributeValueInput</a>]!</td>
<td>

List of attributes specific to this variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>costPrice</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Cost price of the variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Price of the particular variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sku</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Stock keeping unit.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackInventory</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weightscalar">WeightScalar</a></td>
<td>

Weight of the Product Variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Product ID of which type is the variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stocks</strong></td>
<td valign="top">[<a href="#stockinput">StockInput</a>!]</td>
<td>

Stocks of a product available for sale.

</td>
</tr>
</tbody>
</table>

### ProductVariantInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#attributevalueinput">AttributeValueInput</a>]</td>
<td>

List of attributes specific to this variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>costPrice</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Cost price of the variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Price of the particular variant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sku</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Stock keeping unit.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackInventory</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#weightscalar">WeightScalar</a></td>
<td>

Weight of the Product Variant.

</td>
</tr>
</tbody>
</table>

### ReorderInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the item to move.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortOrder</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged.

</td>
</tr>
</tbody>
</table>

### SaleFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top">[<a href="#discountstatusenum">DiscountStatusEnum</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>saleType</strong></td>
<td valign="top"><a href="#discountvaluetypeenum">DiscountValueTypeEnum</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>started</strong></td>
<td valign="top"><a href="#datetimerangeinput">DateTimeRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### SaleInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Voucher name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#discountvaluetypeenum">DiscountValueTypeEnum</a></td>
<td>

Fixed or percentage.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Value of the voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Products related to the discount.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Categories related to the discount.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Collections related to the discount.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Start date of the voucher in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

End date of the voucher in ISO 8601 format.

</td>
</tr>
</tbody>
</table>

### SaleSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#salesortfield">SaleSortField</a>!</td>
<td>

Sort sales by the selected field.

</td>
</tr>
</tbody>
</table>

### SeoInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

SEO title.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

SEO description.

</td>
</tr>
</tbody>
</table>

### ServiceAccountFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>

### ServiceAccountInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the service account.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determine if this service account should be enabled.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permissions</strong></td>
<td valign="top">[<a href="#permissionenum">PermissionEnum</a>]</td>
<td>

List of permission code names to assign to this service account.

</td>
</tr>
</tbody>
</table>

### ServiceAccountSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#serviceaccountsortfield">ServiceAccountSortField</a>!</td>
<td>

Sort service accounts by the selected field.

</td>
</tr>
</tbody>
</table>

### ServiceAccountTokenInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the token.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of service account.

</td>
</tr>
</tbody>
</table>

### ShippingPriceInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Name of the shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Shipping price of the shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minimumOrderPrice</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Minimum order price to use this shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maximumOrderPrice</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Maximum order price to use this shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minimumOrderWeight</strong></td>
<td valign="top"><a href="#weightscalar">WeightScalar</a></td>
<td>

Minimum order weight to use this shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maximumOrderWeight</strong></td>
<td valign="top"><a href="#weightscalar">WeightScalar</a></td>
<td>

Maximum order weight to use this shipping method.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#shippingmethodtypeenum">ShippingMethodTypeEnum</a></td>
<td>

Shipping type: price or weight based.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZone</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Shipping zone this method belongs to.

</td>
</tr>
</tbody>
</table>

### ShippingZoneCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Shipping zone's name. Visible only to the staff.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countries</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

List of countries in this shipping zone.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>default</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Default shipping zone will be used for countries not covered by other zones.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addWarehouses</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

List of warehouses to assign to a shipping zone

</td>
</tr>
</tbody>
</table>

### ShippingZoneUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Shipping zone's name. Visible only to the staff.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countries</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

List of countries in this shipping zone.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>default</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Default shipping zone will be used for countries not covered by other zones.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addWarehouses</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

List of warehouses to assign to a shipping zone

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>removeWarehouses</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

List of warehouses to unassign from a shipping zone

</td>
</tr>
</tbody>
</table>

### ShopSettingsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>headerText</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Header text.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

SEO description.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>includeTaxesInPrices</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Include taxes in prices.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayGrossPrices</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Display prices with tax in store.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chargeTaxesOnShipping</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Charge taxes on shipping.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackInventoryByDefault</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Enable inventory tracking.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultWeightUnit</strong></td>
<td valign="top"><a href="#weightunitsenum">WeightUnitsEnum</a></td>
<td>

Default weight unit.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>automaticFulfillmentDigitalProducts</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Enable automatic fulfillment for all digital products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultDigitalMaxDownloads</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Default number of max downloads per digital content URL.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultDigitalUrlValidDays</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Default number of days which digital content URL will be valid.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultMailSenderName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Default email sender's name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultMailSenderAddress</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Default email sender's address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerSetPasswordUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL of a view where customers can set their password.

</td>
</tr>
</tbody>
</table>

### ShopSettingsTranslationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>headerText</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### SiteDomainInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>domain</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Domain name for shop.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Shop site name.

</td>
</tr>
</tbody>
</table>

### StaffCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Given name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Family name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The unique email address of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

User account is active.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>note</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A note about the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addGroups</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of permission group IDs to which user should be assigned.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>redirectUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL of a view where users should be redirected to set the password. URL in RFC 1808 format.

</td>
</tr>
</tbody>
</table>

### StaffNotificationRecipientInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The ID of the user subscribed to email notifications..

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email address of a user subscribed to email notifications.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>active</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determines if a notification active.

</td>
</tr>
</tbody>
</table>

### StaffUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Given name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Family name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The unique email address of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

User account is active.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>note</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A note about the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addGroups</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of permission group IDs to which user should be assigned.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>removeGroups</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

List of permission group IDs from which user should be unassigned.

</td>
</tr>
</tbody>
</table>

### StaffUserInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#staffmemberstatus">StaffMemberStatus</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### StockFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### StockInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>warehouse</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Warehouse in which stock is located.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Quantity of items available for sell.

</td>
</tr>
</tbody>
</table>

### TranslationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>seoTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>seoDescription</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionJson</strong></td>
<td valign="top"><a href="#jsonstring">JSONString</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateInvoiceInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Invoice number

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL of an invoice to download.

</td>
</tr>
</tbody>
</table>

### UserCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>defaultBillingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Billing address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultShippingAddress</strong></td>
<td valign="top"><a href="#addressinput">AddressInput</a></td>
<td>

Shipping address of the customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Given name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Family name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The unique email address of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

User account is active.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>note</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A note about the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>redirectUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL of a view where users should be redirected to set the password. URL in RFC 1808 format.

</td>
</tr>
</tbody>
</table>

### UserSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#usersortfield">UserSortField</a>!</td>
<td>

Sort users by the selected field.

</td>
</tr>
</tbody>
</table>

### VoucherFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top">[<a href="#discountstatusenum">DiscountStatusEnum</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timesUsed</strong></td>
<td valign="top"><a href="#intrangeinput">IntRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountType</strong></td>
<td valign="top">[<a href="#voucherdiscounttype">VoucherDiscountType</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>started</strong></td>
<td valign="top"><a href="#datetimerangeinput">DateTimeRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### VoucherInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#vouchertypeenum">VoucherTypeEnum</a></td>
<td>

Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Voucher name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>code</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Code to use the voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Start date of the voucher in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

End date of the voucher in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountValueType</strong></td>
<td valign="top"><a href="#discountvaluetypeenum">DiscountValueTypeEnum</a></td>
<td>

Choices: fixed or percentage.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discountValue</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Value of the voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Products discounted by the voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Collections discounted by the voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Categories discounted by the voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minAmountSpent</strong></td>
<td valign="top"><a href="#positivedecimal">PositiveDecimal</a></td>
<td>

Min purchase amount required to apply the voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minCheckoutItemsQuantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Minimal quantity of checkout items required to apply the voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countries</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

Country codes that can be used with the shipping voucher.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>applyOncePerOrder</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Voucher should be applied to the cheapest item or entire order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>applyOncePerCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Voucher should be applied once per customer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>usageLimit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Limit number of times this voucher can be used in total.

</td>
</tr>
</tbody>
</table>

### VoucherSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#vouchersortfield">VoucherSortField</a>!</td>
<td>

Sort vouchers by the selected field.

</td>
</tr>
</tbody>
</table>

### WarehouseAddressInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>streetAddress1</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>streetAddress2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

City.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityArea</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

District.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postalCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Postal code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#countrycode">CountryCode</a>!</td>
<td>

Country.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>countryArea</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

State or province.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Phone number.

</td>
</tr>
</tbody>
</table>

### WarehouseCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Warehouse slug.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Company name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The email address of the warehouse.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Warehouse name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#warehouseaddressinput">WarehouseAddressInput</a>!</td>
<td>

Address of the warehouse.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shippingZones</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td>

Shipping zones supported by the warehouse.

</td>
</tr>
</tbody>
</table>

### WarehouseFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ids</strong></td>
<td valign="top">[<a href="#id">ID</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### WarehouseSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#warehousesortfield">WarehouseSortField</a>!</td>
<td>

Sort warehouses by the selected field.

</td>
</tr>
</tbody>
</table>

### WarehouseUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Warehouse slug.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Company name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The email address of the warehouse.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Warehouse name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#warehouseaddressinput">WarehouseAddressInput</a></td>
<td>

Address of the warehouse.

</td>
</tr>
</tbody>
</table>

### WebhookCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The name of the webhook.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>targetUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The url to receive the payload.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top">[<a href="#webhookeventtypeenum">WebhookEventTypeEnum</a>]</td>
<td>

The events that webhook wants to subscribe. The CHECKOUT_QUANTITY_CHANGED is depreacted. It will be removed in Saleor 3.0

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

DEPRECATED: Use the `app` field instead. This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the app to which webhook belongs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determine if webhook will be set active or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>secretKey</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The secret key used to create a hash signature with each payload.

</td>
</tr>
</tbody>
</table>

### WebhookFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>

### WebhookSortingInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#orderdirection">OrderDirection</a>!</td>
<td>

Specifies the direction in which to sort products.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#webhooksortfield">WebhookSortField</a>!</td>
<td>

Sort webhooks by the selected field.

</td>
</tr>
</tbody>
</table>

### WebhookUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The new name of the webhook.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>targetUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The url to receive the payload.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top">[<a href="#webhookeventtypeenum">WebhookEventTypeEnum</a>]</td>
<td>

The events that webhook wants to subscribe. The CHECKOUT_QUANTITY_CHANGED is depreacted. It will be removed in Saleor 3.0

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serviceAccount</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

DEPRECATED: Use the `app` field instead. This field will be removed after 2020-07-31.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>app</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of the app to which webhook belongs.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Determine if webhook will be set active or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>secretKey</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Use to create a hash signature with each payload.

</td>
</tr>
</tbody>
</table>

## Enums

### AccountErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACTIVATE_OWN_ACCOUNT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ACTIVATE_SUPERUSER_ACCOUNT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DUPLICATED_INPUT_ITEM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DEACTIVATE_OWN_ACCOUNT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DEACTIVATE_SUPERUSER_ACCOUNT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DELETE_NON_STAFF_USER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DELETE_OWN_ACCOUNT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DELETE_STAFF_ACCOUNT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DELETE_SUPERUSER_ACCOUNT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_PASSWORD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LEFT_NOT_MANAGEABLE_PERMISSION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_CREDENTIALS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUT_OF_SCOPE_SERVICE_ACCOUNT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUT_OF_SCOPE_USER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUT_OF_SCOPE_GROUP</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUT_OF_SCOPE_PERMISSION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASSWORD_ENTIRELY_NUMERIC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASSWORD_TOO_COMMON</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASSWORD_TOO_SHORT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASSWORD_TOO_SIMILAR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JWT_SIGNATURE_EXPIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JWT_INVALID_TOKEN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JWT_DECODE_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JWT_MISSING_TOKEN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JWT_INVALID_CSRF_TOKEN</strong></td>
<td></td>
</tr>
</tbody>
</table>

### AddressTypeEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BILLING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING</strong></td>
<td></td>
</tr>
</tbody>
</table>

### AppErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FORBIDDEN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_STATUS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_PERMISSION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_URL_FORMAT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_MANIFEST_FORMAT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANIFEST_URL_CANT_CONNECT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUT_OF_SCOPE_APP</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUT_OF_SCOPE_PERMISSION</strong></td>
<td></td>
</tr>
</tbody>
</table>

### AppSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort apps by name.

</td>
</tr>
<tr>
<td valign="top"><strong>CREATION_DATE</strong></td>
<td>

Sort apps by creation date.

</td>
</tr>
</tbody>
</table>

### AppTypeEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>LOCAL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>THIRDPARTY</strong></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeInputTypeEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DROPDOWN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MULTISELECT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort attributes by name

</td>
</tr>
<tr>
<td valign="top"><strong>SLUG</strong></td>
<td>

Sort attributes by slug

</td>
</tr>
<tr>
<td valign="top"><strong>VALUE_REQUIRED</strong></td>
<td>

Sort attributes by the value required flag

</td>
</tr>
<tr>
<td valign="top"><strong>IS_VARIANT_ONLY</strong></td>
<td>

Sort attributes by the variant only flag

</td>
</tr>
<tr>
<td valign="top"><strong>VISIBLE_IN_STOREFRONT</strong></td>
<td>

Sort attributes by visibility in the storefront

</td>
</tr>
<tr>
<td valign="top"><strong>FILTERABLE_IN_STOREFRONT</strong></td>
<td>

Sort attributes by the filterable in storefront flag

</td>
</tr>
<tr>
<td valign="top"><strong>FILTERABLE_IN_DASHBOARD</strong></td>
<td>

Sort attributes by the filterable in dashboard flag

</td>
</tr>
<tr>
<td valign="top"><strong>STOREFRONT_SEARCH_POSITION</strong></td>
<td>

Sort attributes by their position in storefront

</td>
</tr>
<tr>
<td valign="top"><strong>AVAILABLE_IN_GRID</strong></td>
<td>

Sort attributes based on whether they can be displayed or not in a product grid.

</td>
</tr>
</tbody>
</table>

### AttributeTypeEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>PRODUCT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VARIANT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### AttributeValueType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>COLOR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRADIENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>URL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>STRING</strong></td>
<td></td>
</tr>
</tbody>
</table>

### AuthorizationKeyType

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FACEBOOK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GOOGLE_OAUTH2</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CategorySortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort categories by name.

</td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_COUNT</strong></td>
<td>

Sort categories by product count.

</td>
</tr>
<tr>
<td valign="top"><strong>SUBCATEGORY_COUNT</strong></td>
<td>

Sort categories by subcategory count.

</td>
</tr>
</tbody>
</table>

### CheckoutErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BILLING_ADDRESS_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHECKOUT_NOT_FULLY_PAID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_NOT_PUBLISHED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_UNAVAILABLE_FOR_PURCHASE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INSUFFICIENT_STOCK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_SHIPPING_METHOD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUANTITY_GREATER_THAN_LIMIT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_ADDRESS_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_METHOD_NOT_APPLICABLE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_METHOD_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_NOT_REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TAX_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VOUCHER_NOT_APPLICABLE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ZERO_QUANTITY</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionPublished

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>PUBLISHED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HIDDEN</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort collections by name.

</td>
</tr>
<tr>
<td valign="top"><strong>AVAILABILITY</strong></td>
<td>

Sort collections by availability.

</td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_COUNT</strong></td>
<td>

Sort collections by product count.

</td>
</tr>
</tbody>
</table>

### ConfigurationTypeFieldEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>STRING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BOOLEAN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SECRET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASSWORD</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CountryCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>AF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AX</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AQ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BB</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BJ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BQ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BV</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CV</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CX</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DJ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SV</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GQ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FJ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GP</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IQ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JP</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LV</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LB</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MV</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ML</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MQ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>YT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MX</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ME</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NP</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KP</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MP</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ST</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SX</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SB</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ZA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SJ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TJ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TV</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GB</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>US</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>YE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ZM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ZW</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerEventsEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACCOUNT_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASSWORD_RESET_LINK_SENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASSWORD_RESET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EMAIL_CHANGED_REQUEST</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASSWORD_CHANGED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EMAIL_CHANGED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PLACED_ORDER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOTE_ADDED_TO_ORDER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DIGITAL_LINK_DOWNLOADED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CUSTOMER_DELETED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NAME_ASSIGNED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EMAIL_ASSIGNED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOTE_ADDED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### DiscountErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALREADY_EXISTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### DiscountStatusEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACTIVE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXPIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SCHEDULED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### DiscountValueTypeEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FIXED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PERCENTAGE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ExportErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ExportEventsEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>EXPORT_PENDING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXPORT_SUCCESS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXPORT_FAILED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXPORT_DELETED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXPORTED_FILE_SENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXPORT_FAILED_INFO_SENT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ExportFileSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>STATUS</strong></td>
<td>

Sort export file by status.

</td>
</tr>
<tr>
<td valign="top"><strong>CREATED_AT</strong></td>
<td>

Sort export file by created at.

</td>
</tr>
<tr>
<td valign="top"><strong>UPDATED_AT</strong></td>
<td>

Sort export file by updated at.

</td>
</tr>
</tbody>
</table>

### ExportScope

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALL</strong></td>
<td>

Export all products.

</td>
</tr>
<tr>
<td valign="top"><strong>IDS</strong></td>
<td>

Export products with given ids.

</td>
</tr>
<tr>
<td valign="top"><strong>FILTER</strong></td>
<td>

Export the filtered products.

</td>
</tr>
</tbody>
</table>

### FileTypesEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CSV</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>XLSX</strong></td>
<td></td>
</tr>
</tbody>
</table>

### FulfillmentStatus

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FULFILLED</strong></td>
<td>

Fulfilled

</td>
</tr>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td>

Canceled

</td>
</tr>
</tbody>
</table>

### GiftCardErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALREADY_EXISTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### InvoiceErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_READY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>URL_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EMAIL_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NUMBER_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_STATUS</strong></td>
<td></td>
</tr>
</tbody>
</table>

### JobStatusEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>PENDING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SUCCESS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FAILED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DELETED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### LanguageCodeEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>AR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ES_CO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>JA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>KO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NB</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PT_BR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SQ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SV</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VI</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ZH_HANS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ZH_HANT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### MenuErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANNOT_ASSIGN_NODE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_MENU_ITEM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NO_MENU_ITEM_PROVIDED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TOO_MANY_MENU_ITEMS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### MenuItemsSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort menu items by name.

</td>
</tr>
</tbody>
</table>

### MenuSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort menus by name.

</td>
</tr>
<tr>
<td valign="top"><strong>ITEMS_COUNT</strong></td>
<td>

Sort menus by items count.

</td>
</tr>
</tbody>
</table>

### MetadataErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
</tbody>
</table>

### NavigationType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MAIN</strong></td>
<td>

Main storefront navigation.

</td>
</tr>
<tr>
<td valign="top"><strong>SECONDARY</strong></td>
<td>

Secondary storefront navigation.

</td>
</tr>
</tbody>
</table>

### OrderAction

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CAPTURE</strong></td>
<td>

Represents the capture action.

</td>
</tr>
<tr>
<td valign="top"><strong>MARK_AS_PAID</strong></td>
<td>

Represents a mark-as-paid action.

</td>
</tr>
<tr>
<td valign="top"><strong>REFUND</strong></td>
<td>

Represents a refund action.

</td>
</tr>
<tr>
<td valign="top"><strong>VOID</strong></td>
<td>

Represents a void action.

</td>
</tr>
</tbody>
</table>

### OrderDirection

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ASC</strong></td>
<td>

Specifies an ascending sort order.

</td>
</tr>
<tr>
<td valign="top"><strong>DESC</strong></td>
<td>

Specifies a descending sort order.

</td>
</tr>
</tbody>
</table>

### OrderErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BILLING_ADDRESS_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANNOT_CANCEL_FULFILLMENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANNOT_CANCEL_ORDER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANNOT_DELETE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANNOT_REFUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CAPTURE_INACTIVE_PAYMENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_EDITABLE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULFILL_ORDER_LINE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_NOT_PUBLISHED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_UNAVAILABLE_FOR_PURCHASE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_NO_SHIPPING_ADDRESS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT_MISSING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_METHOD_NOT_APPLICABLE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_METHOD_REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TAX_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VOID_INACTIVE_PAYMENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ZERO_QUANTITY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INSUFFICIENT_STOCK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DUPLICATED_INPUT_ITEM</strong></td>
<td></td>
</tr>
</tbody>
</table>

### OrderEventsEmailsEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>PAYMENT_CONFIRMATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_CONFIRMATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TRACKING_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_CONFIRMATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_CANCEL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_REFUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULFILLMENT_CONFIRMATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DIGITAL_LINKS</strong></td>
<td></td>
</tr>
</tbody>
</table>

### OrderEventsEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DRAFT_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DRAFT_ADDED_PRODUCTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DRAFT_REMOVED_PRODUCTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PLACED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PLACED_FROM_DRAFT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OVERSOLD_ITEMS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_MARKED_AS_PAID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_FULLY_PAID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UPDATED_ADDRESS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EMAIL_SENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT_AUTHORIZED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT_CAPTURED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXTERNAL_SERVICE_NOTIFICATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT_REFUNDED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT_VOIDED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT_FAILED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_REQUESTED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_GENERATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_SENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULFILLMENT_CANCELED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULFILLMENT_RESTOCKED_ITEMS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULFILLMENT_FULFILLED_ITEMS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TRACKING_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOTE_ADDED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OTHER</strong></td>
<td></td>
</tr>
</tbody>
</table>

### OrderSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NUMBER</strong></td>
<td>

Sort orders by number.

</td>
</tr>
<tr>
<td valign="top"><strong>CREATION_DATE</strong></td>
<td>

Sort orders by creation date.

</td>
</tr>
<tr>
<td valign="top"><strong>CUSTOMER</strong></td>
<td>

Sort orders by customer.

</td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT</strong></td>
<td>

Sort orders by payment.

</td>
</tr>
<tr>
<td valign="top"><strong>FULFILLMENT_STATUS</strong></td>
<td>

Sort orders by fulfillment status.

</td>
</tr>
<tr>
<td valign="top"><strong>TOTAL</strong></td>
<td>

Sort orders by total.

</td>
</tr>
</tbody>
</table>

### OrderStatus

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DRAFT</strong></td>
<td>

Draft

</td>
</tr>
<tr>
<td valign="top"><strong>UNFULFILLED</strong></td>
<td>

Unfulfilled

</td>
</tr>
<tr>
<td valign="top"><strong>PARTIALLY_FULFILLED</strong></td>
<td>

Partially fulfilled

</td>
</tr>
<tr>
<td valign="top"><strong>FULFILLED</strong></td>
<td>

Fulfilled

</td>
</tr>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td>

Canceled

</td>
</tr>
</tbody>
</table>

### OrderStatusFilter

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>READY_TO_FULFILL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>READY_TO_CAPTURE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNFULFILLED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PARTIALLY_FULFILLED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULFILLED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PageErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PageSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>TITLE</strong></td>
<td>

Sort pages by title.

</td>
</tr>
<tr>
<td valign="top"><strong>SLUG</strong></td>
<td>

Sort pages by slug.

</td>
</tr>
<tr>
<td valign="top"><strong>VISIBILITY</strong></td>
<td>

Sort pages by visibility.

</td>
</tr>
<tr>
<td valign="top"><strong>CREATION_DATE</strong></td>
<td>

Sort pages by creation date.

</td>
</tr>
<tr>
<td valign="top"><strong>PUBLICATION_DATE</strong></td>
<td>

Sort pages by publication date.

</td>
</tr>
</tbody>
</table>

### PaymentChargeStatusEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NOT_CHARGED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PENDING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PARTIALLY_CHARGED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULLY_CHARGED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PARTIALLY_REFUNDED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULLY_REFUNDED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REFUSED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANCELLED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PaymentErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BILLING_ADDRESS_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PARTIAL_PAYMENT_NOT_ALLOWED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_ADDRESS_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID_SHIPPING_METHOD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_METHOD_NOT_SET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAYMENT_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_SUPPORTED_GATEWAY</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PermissionEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MANAGE_USERS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_STAFF</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_SERVICE_ACCOUNTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_APPS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_DISCOUNTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_PLUGINS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_GIFT_CARD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_MENUS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_ORDERS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_PAGES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_PRODUCTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_SHIPPING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_SETTINGS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_TRANSLATIONS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MANAGE_CHECKOUTS</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PermissionGroupErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ASSIGN_NON_STAFF_MEMBER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DUPLICATED_INPUT_ITEM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANNOT_REMOVE_FROM_LAST_GROUP</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LEFT_NOT_MANAGEABLE_PERMISSION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUT_OF_SCOPE_PERMISSION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUT_OF_SCOPE_USER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PermissionGroupSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort permission group accounts by name.

</td>
</tr>
</tbody>
</table>

### PluginErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PLUGIN_MISCONFIGURED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PluginSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IS_ACTIVE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ProductErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALREADY_EXISTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ATTRIBUTE_ALREADY_ASSIGNED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ATTRIBUTE_CANNOT_BE_ASSIGNED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ATTRIBUTE_VARIANTS_DISABLED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DUPLICATED_INPUT_ITEM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_PRODUCTS_IMAGE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_PRODUCTS_VARIANT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VARIANT_NO_DIGITAL_CONTENT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ProductFieldEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DESCRIPTION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_TYPE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CATEGORY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VISIBLE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AVAILABLE_FOR_PURCHASE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SEARCHABLE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_WEIGHT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>COLLECTIONS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHARGE_TAXES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_IMAGES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VARIANT_SKU</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VARIANT_PRICE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>COST_PRICE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VARIANT_WEIGHT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VARIANT_IMAGES</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ProductOrderField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort products by name.

</td>
</tr>
<tr>
<td valign="top"><strong>PRICE</strong></td>
<td>

Sort products by price.

</td>
</tr>
<tr>
<td valign="top"><strong>MINIMAL_PRICE</strong></td>
<td>

Sort products by a minimal price of a product's variant.

</td>
</tr>
<tr>
<td valign="top"><strong>DATE</strong></td>
<td>

Sort products by update date.

</td>
</tr>
<tr>
<td valign="top"><strong>TYPE</strong></td>
<td>

Sort products by type.

</td>
</tr>
<tr>
<td valign="top"><strong>PUBLISHED</strong></td>
<td>

Sort products by publication status.

</td>
</tr>
</tbody>
</table>

### ProductTypeConfigurable

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CONFIGURABLE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SIMPLE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DIGITAL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPABLE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ProductTypeSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort products by name.

</td>
</tr>
<tr>
<td valign="top"><strong>DIGITAL</strong></td>
<td>

Sort products by type.

</td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_REQUIRED</strong></td>
<td>

Sort products by shipping.

</td>
</tr>
</tbody>
</table>

### ReportingPeriod

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>TODAY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>THIS_MONTH</strong></td>
<td></td>
</tr>
</tbody>
</table>

### SaleSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort sales by name.

</td>
</tr>
<tr>
<td valign="top"><strong>START_DATE</strong></td>
<td>

Sort sales by start date.

</td>
</tr>
<tr>
<td valign="top"><strong>END_DATE</strong></td>
<td>

Sort sales by end date.

</td>
</tr>
<tr>
<td valign="top"><strong>VALUE</strong></td>
<td>

Sort sales by value.

</td>
</tr>
<tr>
<td valign="top"><strong>TYPE</strong></td>
<td>

Sort sales by type.

</td>
</tr>
</tbody>
</table>

### SaleType

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FIXED</strong></td>
<td>

USD

</td>
</tr>
<tr>
<td valign="top"><strong>PERCENTAGE</strong></td>
<td>

%

</td>
</tr>
</tbody>
</table>

### ServiceAccountSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort service accounts by name.

</td>
</tr>
<tr>
<td valign="top"><strong>CREATION_DATE</strong></td>
<td>

Sort service accounts by creation date.

</td>
</tr>
</tbody>
</table>

### ShippingErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALREADY_EXISTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MAX_LESS_THAN_MIN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DUPLICATED_INPUT_ITEM</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ShippingMethodTypeEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>PRICE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WEIGHT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ShopErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALREADY_EXISTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANNOT_FETCH_TAX_RATES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### StaffMemberStatus

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACTIVE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DEACTIVATED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### StockAvailability

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>IN_STOCK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUT_OF_STOCK</strong></td>
<td></td>
</tr>
</tbody>
</table>

### StockErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALREADY_EXISTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### TaxRateType

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACCOMMODATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ADMISSION_TO_CULTURAL_EVENTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ADMISSION_TO_ENTERTAINMENT_EVENTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ADMISSION_TO_SPORTING_EVENTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ADVERTISING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AGRICULTURAL_SUPPLIES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BABY_FOODSTUFFS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BIKES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BOOKS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHILDRENS_CLOTHING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DOMESTIC_FUEL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DOMESTIC_SERVICES</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>E_BOOKS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FOODSTUFFS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>HOTELS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MEDICAL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NEWSPAPERS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASSENGER_TRANSPORT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PHARMACEUTICALS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PROPERTY_RENOVATIONS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RESTAURANTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SOCIAL_HOUSING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>STANDARD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WATER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WINE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionError

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_INCORRECT_NUMBER</strong></td>
<td>

incorrect_number

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_INVALID_NUMBER</strong></td>
<td>

invalid_number

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_INCORRECT_CVV</strong></td>
<td>

incorrect_cvv

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_INVALID_CVV</strong></td>
<td>

invalid_cvv

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_INCORRECT_ZIP</strong></td>
<td>

incorrect_zip

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_INCORRECT_ADDRESS</strong></td>
<td>

incorrect_address

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_INVALID_EXPIRY_DATE</strong></td>
<td>

invalid_expiry_date

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_EXPIRED</strong></td>
<td>

expired

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_PROCESSING_ERROR</strong></td>
<td>

processing_error

</td>
</tr>
<tr>
<td valign="top"><strong>TRANSACTIONERROR_DECLINED</strong></td>
<td>

declined

</td>
</tr>
</tbody>
</table>

### TransactionKind

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>AUTH</strong></td>
<td>

Authorization

</td>
</tr>
<tr>
<td valign="top"><strong>PENDING</strong></td>
<td>

Pending

</td>
</tr>
<tr>
<td valign="top"><strong>ACTION_TO_CONFIRM</strong></td>
<td>

Action to confirm

</td>
</tr>
<tr>
<td valign="top"><strong>REFUND</strong></td>
<td>

Refund

</td>
</tr>
<tr>
<td valign="top"><strong>REFUND_ONGOING</strong></td>
<td>

Refund in progress

</td>
</tr>
<tr>
<td valign="top"><strong>CAPTURE</strong></td>
<td>

Capture

</td>
</tr>
<tr>
<td valign="top"><strong>VOID</strong></td>
<td>

Void

</td>
</tr>
<tr>
<td valign="top"><strong>CONFIRM</strong></td>
<td>

Confirm

</td>
</tr>
<tr>
<td valign="top"><strong>CANCEL</strong></td>
<td>

Cancel

</td>
</tr>
</tbody>
</table>

### TranslatableKinds

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ATTRIBUTE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ATTRIBUTE_VALUE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CATEGORY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>COLLECTION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MENU_ITEM</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PAGE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SALE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING_METHOD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VARIANT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VOUCHER</strong></td>
<td></td>
</tr>
</tbody>
</table>

### TranslationErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### UserSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FIRST_NAME</strong></td>
<td>

Sort users by first name.

</td>
</tr>
<tr>
<td valign="top"><strong>LAST_NAME</strong></td>
<td>

Sort users by last name.

</td>
</tr>
<tr>
<td valign="top"><strong>EMAIL</strong></td>
<td>

Sort users by email.

</td>
</tr>
<tr>
<td valign="top"><strong>ORDER_COUNT</strong></td>
<td>

Sort users by order count.

</td>
</tr>
</tbody>
</table>

### VoucherDiscountType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FIXED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PERCENTAGE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SHIPPING</strong></td>
<td></td>
</tr>
</tbody>
</table>

### VoucherSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CODE</strong></td>
<td>

Sort vouchers by code.

</td>
</tr>
<tr>
<td valign="top"><strong>START_DATE</strong></td>
<td>

Sort vouchers by start date.

</td>
</tr>
<tr>
<td valign="top"><strong>END_DATE</strong></td>
<td>

Sort vouchers by end date.

</td>
</tr>
<tr>
<td valign="top"><strong>VALUE</strong></td>
<td>

Sort vouchers by value.

</td>
</tr>
<tr>
<td valign="top"><strong>TYPE</strong></td>
<td>

Sort vouchers by type.

</td>
</tr>
<tr>
<td valign="top"><strong>USAGE_LIMIT</strong></td>
<td>

Sort vouchers by usage limit.

</td>
</tr>
<tr>
<td valign="top"><strong>MINIMUM_SPENT_AMOUNT</strong></td>
<td>

Sort vouchers by minimum spent amount.

</td>
</tr>
</tbody>
</table>

### VoucherTypeEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>SHIPPING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ENTIRE_ORDER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SPECIFIC_PRODUCT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### WarehouseErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALREADY_EXISTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### WarehouseSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort warehouses by name.

</td>
</tr>
</tbody>
</table>

### WebhookErrorCode

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>GRAPHQL_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVALID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNIQUE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### WebhookEventTypeEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ANY_EVENTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_FULLY_PAID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_CANCELLED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_FULFILLED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_REQUESTED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_DELETED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_SENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CUSTOMER_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHECKOUT_QUANTITY_CHANGED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHECKOUT_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHECKOUT_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULFILLMENT_CREATED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### WebhookSampleEventTypeEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ORDER_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_FULLY_PAID</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_CANCELLED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORDER_FULFILLED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_REQUESTED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_DELETED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INVOICE_SENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CUSTOMER_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRODUCT_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHECKOUT_QUANTITY_CHANGED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHECKOUT_CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHECKOUT_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FULFILLMENT_CREATED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### WebhookSortField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td>

Sort webhooks by name.

</td>
</tr>
<tr>
<td valign="top"><strong>SERVICE_ACCOUNT</strong></td>
<td>

Sort webhooks by service account.

</td>
</tr>
<tr>
<td valign="top"><strong>TARGET_URL</strong></td>
<td>

Sort webhooks by target url.

</td>
</tr>
<tr>
<td valign="top"><strong>APP</strong></td>
<td>

Sort webhooks by service account.

</td>
</tr>
</tbody>
</table>

### WeightUnitsEnum

An enumeration.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>KG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LB</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OZ</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>G</strong></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Date

The `Date` scalar type represents a Date
value as specified by
[iso8601](https://en.wikipedia.org/wiki/ISO_8601).

### DateTime

The `DateTime` scalar type represents a DateTime
value as specified by
[iso8601](https://en.wikipedia.org/wiki/ISO_8601).

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 

### GenericScalar

The `GenericScalar` scalar type represents a generic
GraphQL scalar value that could be:
String, Boolean, Int, Float, List or Object.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31 - 1) and 2^31 - 1 since represented in JSON as double-precision floating point numbers specifiedby [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).

### JSONString

Allows use of a JSON String for input / output from the GraphQL schema.

Use of this type is *not recommended* as you lose the benefits of having a defined, static
schema (one of the key benefits of GraphQL).

### PositiveDecimal

Positive Decimal scalar implementation.

Should be used in places where value must be positive.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### UUID

### Upload

Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec.

### WeightScalar

### _Any

Anything


## Interfaces


### Job

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#jobstatusenum">JobStatusEnum</a>!</td>
<td>

Job status.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Created date time of job in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Date time of job last update in ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Job message.

</td>
</tr>
</tbody>
</table>

### Node

An object with an ID

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of the object.

</td>
</tr>
</tbody>
</table>

### ObjectWithMetadata

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>privateMetadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of private metadata items.Requires proper staff permissions to access.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top">[<a href="#metadataitem">MetadataItem</a>]!</td>
<td>

List of public metadata items. Can be accessed without permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateMeta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of privately stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `privetaMetadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong> ⚠️</td>
<td valign="top">[<a href="#metastore">MetaStore</a>]!</td>
<td>

List of publicly stored metadata namespaces.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use the `metadata` field. This field will be removed after 2020-07-31.

</blockquote>
</td>
</tr>
</tbody>
</table>

<!-- END graphql-markdown -->
