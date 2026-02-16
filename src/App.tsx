import React, { useState } from 'react';
import { HierarchyData } from './types';
import HierarchyChart from './components/HierarchyChart';
import { Search, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

function App() {
  const [data] = useState<HierarchyData[]>(
    [
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_NEW_CLAIM_LATEST",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "VALIDATE_INPUT",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_MASTER_BOOKING",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_COINSURERS",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "HANDLE_CLAIMANT",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_PERILS",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_REVISION",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_SELF_AS_CLMANT",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "RECORD_CLAIM_TRANSACTION",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_FILE",
        "internalFunctionsDtos": [
          {
            "calledFunctionName": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLM_NOT_DETAILS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CREATE_CLM_NOT_DETAILS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "L_COINSURERS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "L_COINSURERS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_FILE",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CREATE_CLAIM_FILE",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GIN_FILE_MASTER",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "GIN_FILE_MASTER",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CUR_PERILS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CUR_PERILS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GIN_CLAIM_MASTER_BOOKINGS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "GIN_CLAIM_MASTER_BOOKINGS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GIN_RGSTD_CLAIMANTS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "GIN_RGSTD_CLAIMANTS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "V_PERILS_TAB",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "V_PERILS_TAB",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_MASTER_BOOKING",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CREATE_CLAIM_MASTER_BOOKING",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CUR_TEMP_PER_EXCESSES",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CUR_TEMP_PER_EXCESSES",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "VALIDATE_INPUT",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "VALIDATE_INPUT",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_NEW_CLAIM_LATEST",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CREATE_NEW_CLAIM_LATEST",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_PERILS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CREATE_CLAIM_PERILS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GIN_GIS_TRANSACTIONS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "GIN_GIS_TRANSACTIONS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "HANDLE_CLAIMANT",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "HANDLE_CLAIMANT",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_SELF_AS_CLMANT",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CREATE_SELF_AS_CLMANT",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_COINSURERS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CREATE_CLAIM_COINSURERS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLAIM_REVISION",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "CREATE_CLAIM_REVISION",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "L_PERIL_EXCESSES",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "L_PERIL_EXCESSES",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "RECORD_CLAIM_TRANSACTION",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "RECORD_CLAIM_TRANSACTION",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GIN_CLAIM_COINSURERS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "UNKNOWN_PACKAGE",
            "calledFunctionName": "GIN_CLAIM_COINSURERS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GET_PARAM_VARCHAR",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIN_PARAMETERS_PKG",
            "calledFunctionName": "GET_PARAM_VARCHAR",
            "packagesProcedureId": 6236,
            "externalHierarchy": {
              "packageName": "GIN_PARAMETERS_PKG",
              "procedureFunctionName": "GET_PARAM_VARCHAR",
              "owner": "TQ_GIS"
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GET_ORG_TYPE",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "TQC_INTERFACES_PKG",
            "calledFunctionName": "GET_ORG_TYPE",
            "packagesProcedureId": 29989,
            "externalHierarchy": {
              "packageName": "TQC_INTERFACES_PKG",
              "procedureFunctionName": "GET_ORG_TYPE",
              "owner": "TQ_CRM",
              "externalFunctionsDtos": [
                {
                  "calledPackageName": "DBMS_OUTPUT",
                  "calledFunctionName": "PUT_LINE",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "RAISE_APPLICATION_ERROR",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "RAISE_APPLICATION_ERROR",
                  "packagesProcedureId": null
                }
              ]
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_CLM_REVISION",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIN_STP_CLAIMS_PKG",
            "calledFunctionName": "CREATE_CLM_REVISION",
            "packagesProcedureId": 4533,
            "externalHierarchy": {
              "packageName": "GIN_STP_CLAIMS_PKG",
              "procedureFunctionName": "CREATE_CLM_REVISION",
              "owner": "TQ_GIS",
              "externalFunctionsDtos": [
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "CLM_PERILS",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "V_PTAB",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GIN_GIS_TRANSACTIONS",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "CREATE_CLM_REVISION",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "V_PERILS_TAB",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GIN_CLAIM_PERILS",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GIN_CLAIM_PERIL_EXCESSES",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "PROCESS_REVISION",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "CREATE_CLM_REVISION",
                  "packagesProcedureId": null
                }
              ]
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CLAIM_TOTAL_LOSS",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIN_STP_CLAIMS_PKG",
            "calledFunctionName": "CLAIM_TOTAL_LOSS",
            "packagesProcedureId": 4506,
            "externalHierarchy": {
              "packageName": "GIN_STP_CLAIMS_PKG",
              "procedureFunctionName": "CLAIM_TOTAL_LOSS",
              "owner": "TQ_GIS"
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "POPULATE_MANDATORY_CLM_STATUS",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIN_STP_CLAIMS_PKG",
            "calledFunctionName": "POPULATE_MANDATORY_CLM_STATUS",
            "packagesProcedureId": 4595,
            "externalHierarchy": {
              "packageName": "GIN_STP_CLAIMS_PKG",
              "procedureFunctionName": "POPULATE_MANDATORY_CLM_STATUS",
              "owner": "TQ_GIS",
              "externalFunctionsDtos": [
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GIN_CLM_OBSERVATIONS",
                  "packagesProcedureId": null
                }
              ]
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "POPULATE_MANDATORY_RQRD_DOCS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "GIN_STP_CLAIMS_PKG",
            "calledFunctionName": "POPULATE_MANDATORY_RQRD_DOCS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_SELF_AS_CLMANT",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIN_STP_CLAIMS_PKG",
            "calledFunctionName": "CREATE_SELF_AS_CLMANT",
            "packagesProcedureId": 4546,
            "externalHierarchy": {
              "packageName": "GIN_STP_CLAIMS_PKG",
              "procedureFunctionName": "CREATE_SELF_AS_CLMANT",
              "owner": "TQ_GIS",
              "externalFunctionsDtos": [
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "CREATE_SELF_AS_CLMANT",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GIN_RGSTD_CLAIMANTS",
                  "packagesProcedureId": null
                }
              ]
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "PRC_MAP_GROUPEDRSKS_PRC",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIN_STP_CLAIMS_PKG",
            "calledFunctionName": "PRC_MAP_GROUPEDRSKS_PRC",
            "packagesProcedureId": 4604,
            "externalHierarchy": {
              "packageName": "GIN_STP_CLAIMS_PKG",
              "procedureFunctionName": "PRC_MAP_GROUPEDRSKS_PRC",
              "owner": "TQ_GIS",
              "externalFunctionsDtos": [
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GIN_EVENTS",
                  "packagesProcedureId": null
                }
              ]
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "CREATE_RI_CESSIONS",
        "externalUnknownFunctionsDtos": [
          {
            "calledPackageName": "GIN_STP_CLAIMS_PKG",
            "calledFunctionName": "CREATE_RI_CESSIONS",
            "packagesProcedureId": null
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GET_GRP_RI_PENDNG_TRNS",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIS_RI_PROCEDURES",
            "calledFunctionName": "GET_GRP_RI_PENDNG_TRNS",
            "packagesProcedureId": 7333,
            "externalHierarchy": {
              "packageName": "GIS_RI_PROCEDURES",
              "procedureFunctionName": "GET_GRP_RI_PENDNG_TRNS",
              "owner": "TQ_GIS"
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GET_PERIL_LIMITS",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIN_CLAIM_UTILITIES",
            "calledFunctionName": "GET_PERIL_LIMITS",
            "packagesProcedureId": 6765,
            "externalHierarchy": {
              "packageName": "GIN_CLAIM_UTILITIES",
              "procedureFunctionName": "GET_PERIL_LIMITS",
              "owner": "TQ_GIS",
              "externalFunctionsDtos": [
                {
                  "calledPackageName": "DBMS_OUTPUT",
                  "calledFunctionName": "PUT_LINE",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "RAISE_APPLICATION_ERROR",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "DBMS_OUTPUT",
                  "calledFunctionName": "PUT_LINE",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "RAISE_APPLICATION_ERROR",
                  "packagesProcedureId": null
                }
              ]
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "GET_NUMBER_FORMAT",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIN_SEQUENCES_PKG",
            "calledFunctionName": "GET_NUMBER_FORMAT",
            "packagesProcedureId": 3424,
            "externalHierarchy": {
              "packageName": "GIN_SEQUENCES_PKG",
              "procedureFunctionName": "GET_NUMBER_FORMAT",
              "owner": "TQ_GIS",
              "externalFunctionsDtos": [
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "RENEWAL",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GET_UNUSED_SEQ",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GET_SEQ",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GET_ALPHABET_SEQ",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "RENEWAL",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "RAISE_WHEN_OTHERS",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GET_UNUSED_SEQ",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GET_SEQ",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "GET_ALPHABET_SEQ",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "GIN_PARAMETERS_PKG",
                  "calledFunctionName": "GET_PARAM_VARCHAR",
                  "packagesProcedureId": 6236,
                  "externalHierarchy": {
                    "packageName": "GIN_PARAMETERS_PKG",
                    "procedureFunctionName": "GET_PARAM_VARCHAR",
                    "owner": "TQ_GIS"
                  }
                },
                {
                  "calledPackageName": "GIN_PARAMETERS_PKG",
                  "calledFunctionName": "GET_PARAM_VARCHAR",
                  "packagesProcedureId": 6236,
                  "externalHierarchy": {
                    "packageName": "GIN_PARAMETERS_PKG",
                    "procedureFunctionName": "GET_PARAM_VARCHAR",
                    "owner": "TQ_GIS"
                  }
                },
                {
                  "calledPackageName": "GIN_PARAMETERS_PKG",
                  "calledFunctionName": "GET_PARAM_VARCHAR",
                  "packagesProcedureId": 6236,
                  "externalHierarchy": {
                    "packageName": "GIN_PARAMETERS_PKG",
                    "procedureFunctionName": "GET_PARAM_VARCHAR",
                    "owner": "TQ_GIS"
                  }
                },
                {
                  "calledPackageName": "GIN_PARAMETERS_PKG",
                  "calledFunctionName": "GET_PARAM_VARCHAR",
                  "packagesProcedureId": 6236,
                  "externalHierarchy": {
                    "packageName": "GIN_PARAMETERS_PKG",
                    "procedureFunctionName": "GET_PARAM_VARCHAR",
                    "owner": "TQ_GIS"
                  }
                },
                {
                  "calledPackageName": "GIN_PARAMETERS_PKG",
                  "calledFunctionName": "GET_PARAM_VARCHAR",
                  "packagesProcedureId": 6236,
                  "externalHierarchy": {
                    "packageName": "GIN_PARAMETERS_PKG",
                    "procedureFunctionName": "GET_PARAM_VARCHAR",
                    "owner": "TQ_GIS"
                  }
                }
              ]
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "PROC_CLMREVIEWS_ALERT",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "GIN_MANAGE_ALERTS_PKG",
            "calledFunctionName": "PROC_CLMREVIEWS_ALERT",
            "packagesProcedureId": 1587,
            "externalHierarchy": {
              "packageName": "GIN_MANAGE_ALERTS_PKG",
              "procedureFunctionName": "PROC_CLMREVIEWS_ALERT",
              "owner": "TQ_GIS",
              "externalFunctionsDtos": [
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "RAISE_APPLICATION_ERROR",
                  "packagesProcedureId": null
                },
                {
                  "calledPackageName": "TQC_INTERFACES_PKG",
                  "calledFunctionName": "CREATE_ALERT_PRC",
                  "packagesProcedureId": 29971,
                  "externalHierarchy": {
                    "packageName": "TQC_INTERFACES_PKG",
                    "procedureFunctionName": "CREATE_ALERT_PRC",
                    "owner": "TQ_CRM",
                    "externalFunctionsDtos": [
                      {
                        "calledPackageName": "N/A",
                        "calledFunctionName": "TQC_ALERTS",
                        "packagesProcedureId": null
                      },
                      {
                        "calledPackageName": "TQC_SMS_PKG",
                        "calledFunctionName": "CREATE_SMS_MSG",
                        "packagesProcedureId": 28760,
                        "externalHierarchy": {
                          "packageName": "TQC_SMS_PKG",
                          "procedureFunctionName": "CREATE_SMS_MSG",
                          "owner": "TQ_CRM",
                          "externalFunctionsDtos": [
                            {
                              "calledPackageName": "TQC_CREATE_SMS_PKG",
                              "calledFunctionName": "CREATE_SMS_MSG",
                              "packagesProcedureId": 30202,
                              "externalHierarchy": {
                                "packageName": "TQC_CREATE_SMS_PKG",
                                "procedureFunctionName": "CREATE_SMS_MSG",
                                "owner": "TQ_CRM",
                                "externalFunctionsDtos": [
                                  {
                                    "calledPackageName": "TQC_MEMOS_DBPKG",
                                    "calledFunctionName": "PROCESS_GIS_POL_MEMO",
                                    "packagesProcedureId": 28932,
                                    "externalHierarchy": {
                                      "packageName": "TQC_MEMOS_DBPKG",
                                      "procedureFunctionName": "PROCESS_GIS_POL_MEMO",
                                      "owner": "TQ_CRM",
                                      "externalFunctionsDtos": [
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DECIMAL",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "CUR_CERTS",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "MERGE_LOGO",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "TWN_CODE",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "MESSAGE",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "MONTHS_BETWEEN",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "SCL_CODE",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "POL_BATCH_NO",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "REG_CMB_CLAIM_NO",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "IPU_CODE",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "CLNT_CODE",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "CLD_CODE",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "SPR_CODE",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "BBR_CODE",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "CO_CMB_CLAIM_NO",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "CLMR_CMB_CLAIM_NO",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "CPV_CMB_CLAIM_NO",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "CSD_CMB_CLAIM_NO",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "GIS_UTILITIES",
                                          "calledFunctionName": "CLNT_NAME",
                                          "packagesProcedureId": 1763,
                                          "externalHierarchy": {
                                            "packageName": "GIS_UTILITIES",
                                            "procedureFunctionName": "CLNT_NAME",
                                            "owner": "TQ_GIS",
                                            "externalFunctionsDtos": [
                                              {
                                                "calledPackageName": "GIN_PARAMETERS_PKG",
                                                "calledFunctionName": "GET_PARAM_VARCHAR",
                                                "packagesProcedureId": 6236,
                                                "externalHierarchy": {
                                                  "packageName": "GIN_PARAMETERS_PKG",
                                                  "procedureFunctionName": "GET_PARAM_VARCHAR",
                                                  "owner": "TQ_GIS"
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "calledPackageName": "TQC_SMS_PKG",
                                    "calledFunctionName": "SEND_SMS_MSG",
                                    "packagesProcedureId": 28786,
                                    "externalHierarchy": {
                                      "packageName": "TQC_SMS_PKG",
                                      "procedureFunctionName": "SEND_SMS_MSG",
                                      "owner": "TQ_CRM",
                                      "externalFunctionsDtos": [
                                        {
                                          "calledPackageName": "PKG_GLOBAL_VARS",
                                          "calledFunctionName": "GET_PVARCHAR2",
                                          "packagesProcedureId": 30444,
                                          "externalHierarchy": {
                                            "packageName": "PKG_GLOBAL_VARS",
                                            "procedureFunctionName": "GET_PVARCHAR2",
                                            "owner": "TQ_CRM",
                                            "externalFunctionsDtos": [
                                              {
                                                "calledPackageName": "DBMS_SQL",
                                                "calledFunctionName": "PARSE",
                                                "packagesProcedureId": null
                                              },
                                              {
                                                "calledPackageName": "DBMS_SQL",
                                                "calledFunctionName": "BIND_VARIABLE",
                                                "packagesProcedureId": null
                                              },
                                              {
                                                "calledPackageName": "DBMS_SQL",
                                                "calledFunctionName": "EXECUTE",
                                                "packagesProcedureId": null
                                              },
                                              {
                                                "calledPackageName": "DBMS_SQL",
                                                "calledFunctionName": "VARIABLE_VALUE",
                                                "packagesProcedureId": null
                                              },
                                              {
                                                "calledPackageName": "DBMS_SQL",
                                                "calledFunctionName": "CLOSE_CURSOR",
                                                "packagesProcedureId": null
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "calledPackageName": "TQC_SEND_SMS_PKG",
                                          "calledFunctionName": "SEND_SMS_MSG",
                                          "packagesProcedureId": 30214,
                                          "externalHierarchy": {
                                            "packageName": "TQC_SEND_SMS_PKG",
                                            "procedureFunctionName": "SEND_SMS_MSG",
                                            "owner": "TQ_CRM",
                                            "externalFunctionsDtos": [
                                              {
                                                "calledPackageName": "N/A",
                                                "calledFunctionName": "TQC_SMS_MESSAGES",
                                                "packagesProcedureId": null
                                              },
                                              {
                                                "calledPackageName": "N/A",
                                                "calledFunctionName": "TQC_SMS_MESSAGES",
                                                "packagesProcedureId": null
                                              },
                                              {
                                                "calledPackageName": "PKG_GLOBAL_VARS",
                                                "calledFunctionName": "GET_PVARCHAR2",
                                                "packagesProcedureId": 30444,
                                                "externalHierarchy": {
                                                  "packageName": "PKG_GLOBAL_VARS",
                                                  "procedureFunctionName": "GET_PVARCHAR2",
                                                  "owner": "TQ_CRM",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "PARSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "BIND_VARIABLE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "EXECUTE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "VARIABLE_VALUE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "CLOSE_CURSOR",
                                                      "packagesProcedureId": null
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "calledPackageName": "TQC_PARAMETERS_PKG",
                                                "calledFunctionName": "GET_PARAM_VARCHAR",
                                                "packagesProcedureId": 28298,
                                                "externalHierarchy": {
                                                  "packageName": "TQC_PARAMETERS_PKG",
                                                  "procedureFunctionName": "GET_PARAM_VARCHAR",
                                                  "owner": "TQ_CRM"
                                                }
                                              },
                                              {
                                                "calledPackageName": "GIS_UTILITIES",
                                                "calledFunctionName": "CLNT_NAME",
                                                "packagesProcedureId": 1763,
                                                "externalHierarchy": {
                                                  "packageName": "GIS_UTILITIES",
                                                  "procedureFunctionName": "CLNT_NAME",
                                                  "owner": "TQ_GIS",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "GIN_PARAMETERS_PKG",
                                                      "calledFunctionName": "GET_PARAM_VARCHAR",
                                                      "packagesProcedureId": 6236,
                                                      "externalHierarchy": {
                                                        "packageName": "GIN_PARAMETERS_PKG",
                                                        "procedureFunctionName": "GET_PARAM_VARCHAR",
                                                        "owner": "TQ_GIS"
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "calledPackageName": "TQC_SMS_PKG",
                                                "calledFunctionName": "SEND_INSTANT_SMS",
                                                "packagesProcedureId": 28785,
                                                "externalHierarchy": {
                                                  "packageName": "TQC_SMS_PKG",
                                                  "procedureFunctionName": "SEND_INSTANT_SMS",
                                                  "owner": "TQ_CRM",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "UTL_URL",
                                                      "calledFunctionName": "ESCAPE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "N/A",
                                                      "calledFunctionName": "CHR",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_URL",
                                                      "calledFunctionName": "ESCAPE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_OUTPUT",
                                                      "calledFunctionName": "PUT_LINE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "SET_PROXY",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "BEGIN_REQUEST",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "SET_HEADER",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "WRITE_TEXT",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "GET_RESPONSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "READ_TEXT",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "N/A",
                                                      "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "END_RESPONSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "TQC_SEND_SMS_PKG",
                                                      "calledFunctionName": "SEND_INSTANT_SMS",
                                                      "packagesProcedureId": 30213,
                                                      "externalHierarchy": {
                                                        "packageName": "TQC_SEND_SMS_PKG",
                                                        "procedureFunctionName": "SEND_INSTANT_SMS",
                                                        "owner": "TQ_CRM",
                                                        "externalFunctionsDtos": [
                                                          {
                                                            "calledPackageName": "UTL_URL",
                                                            "calledFunctionName": "ESCAPE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "N/A",
                                                            "calledFunctionName": "CHR",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_URL",
                                                            "calledFunctionName": "ESCAPE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "DBMS_OUTPUT",
                                                            "calledFunctionName": "PUT_LINE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_PROXY",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_WALLET",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "BEGIN_REQUEST",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_HEADER",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "WRITE_TEXT",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "GET_RESPONSE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "READ_TEXT",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "N/A",
                                                            "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "END_RESPONSE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "TQC_PARAMETERS_PKG",
                                                            "calledFunctionName": "GET_PARAM_VARCHAR",
                                                            "packagesProcedureId": 28298,
                                                            "externalHierarchy": {
                                                              "packageName": "TQC_PARAMETERS_PKG",
                                                              "procedureFunctionName": "GET_PARAM_VARCHAR",
                                                              "owner": "TQ_CRM"
                                                            }
                                                          },
                                                          {
                                                            "calledPackageName": "TQC_PARAMETERS_PKG",
                                                            "calledFunctionName": "GET_PARAM_VARCHAR2",
                                                            "packagesProcedureId": 28299,
                                                            "externalHierarchy": {
                                                              "packageName": "TQC_PARAMETERS_PKG",
                                                              "procedureFunctionName": "GET_PARAM_VARCHAR2",
                                                              "owner": "TQ_CRM"
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "calledPackageName": "PKG_GLOBAL_VARS",
                                                "calledFunctionName": "GET_PVARCHAR2",
                                                "packagesProcedureId": 30444,
                                                "externalHierarchy": {
                                                  "packageName": "PKG_GLOBAL_VARS",
                                                  "procedureFunctionName": "GET_PVARCHAR2",
                                                  "owner": "TQ_CRM",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "PARSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "BIND_VARIABLE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "EXECUTE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "VARIABLE_VALUE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "CLOSE_CURSOR",
                                                      "packagesProcedureId": null
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "calledPackageName": "TQC_SMS_PKG",
                                                "calledFunctionName": "SEND_INSTANT_SMS",
                                                "packagesProcedureId": 28785,
                                                "externalHierarchy": {
                                                  "packageName": "TQC_SMS_PKG",
                                                  "procedureFunctionName": "SEND_INSTANT_SMS",
                                                  "owner": "TQ_CRM",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "UTL_URL",
                                                      "calledFunctionName": "ESCAPE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "N/A",
                                                      "calledFunctionName": "CHR",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_URL",
                                                      "calledFunctionName": "ESCAPE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_OUTPUT",
                                                      "calledFunctionName": "PUT_LINE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "SET_PROXY",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "BEGIN_REQUEST",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "SET_HEADER",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "WRITE_TEXT",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "GET_RESPONSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "READ_TEXT",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "N/A",
                                                      "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "END_RESPONSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "TQC_SEND_SMS_PKG",
                                                      "calledFunctionName": "SEND_INSTANT_SMS",
                                                      "packagesProcedureId": 30213,
                                                      "externalHierarchy": {
                                                        "packageName": "TQC_SEND_SMS_PKG",
                                                        "procedureFunctionName": "SEND_INSTANT_SMS",
                                                        "owner": "TQ_CRM",
                                                        "externalFunctionsDtos": [
                                                          {
                                                            "calledPackageName": "UTL_URL",
                                                            "calledFunctionName": "ESCAPE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "N/A",
                                                            "calledFunctionName": "CHR",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_URL",
                                                            "calledFunctionName": "ESCAPE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "DBMS_OUTPUT",
                                                            "calledFunctionName": "PUT_LINE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_PROXY",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_WALLET",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "BEGIN_REQUEST",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_HEADER",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "WRITE_TEXT",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "GET_RESPONSE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "READ_TEXT",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "N/A",
                                                            "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "END_RESPONSE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "TQC_PARAMETERS_PKG",
                                                            "calledFunctionName": "GET_PARAM_VARCHAR",
                                                            "packagesProcedureId": 28298,
                                                            "externalHierarchy": {
                                                              "packageName": "TQC_PARAMETERS_PKG",
                                                              "procedureFunctionName": "GET_PARAM_VARCHAR",
                                                              "owner": "TQ_CRM"
                                                            }
                                                          },
                                                          {
                                                            "calledPackageName": "TQC_PARAMETERS_PKG",
                                                            "calledFunctionName": "GET_PARAM_VARCHAR2",
                                                            "packagesProcedureId": 28299,
                                                            "externalHierarchy": {
                                                              "packageName": "TQC_PARAMETERS_PKG",
                                                              "procedureFunctionName": "GET_PARAM_VARCHAR2",
                                                              "owner": "TQ_CRM"
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "calledPackageName": "TQC_SEND_SMS_PKG",
                                          "calledFunctionName": "SEND_SMS_MSG2",
                                          "packagesProcedureId": 30216,
                                          "externalHierarchy": {
                                            "packageName": "TQC_SEND_SMS_PKG",
                                            "procedureFunctionName": "SEND_SMS_MSG2",
                                            "owner": "TQ_CRM",
                                            "externalFunctionsDtos": [
                                              {
                                                "calledPackageName": "N/A",
                                                "calledFunctionName": "TQC_SMS_MESSAGES",
                                                "packagesProcedureId": null
                                              },
                                              {
                                                "calledPackageName": "PKG_GLOBAL_VARS",
                                                "calledFunctionName": "GET_PVARCHAR2",
                                                "packagesProcedureId": 30444,
                                                "externalHierarchy": {
                                                  "packageName": "PKG_GLOBAL_VARS",
                                                  "procedureFunctionName": "GET_PVARCHAR2",
                                                  "owner": "TQ_CRM",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "PARSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "BIND_VARIABLE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "EXECUTE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "VARIABLE_VALUE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "CLOSE_CURSOR",
                                                      "packagesProcedureId": null
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          "calledPackageName": "TQC_SEND_SMS_PKG",
                                          "calledFunctionName": "SEND_SMS_MSG",
                                          "packagesProcedureId": 30214,
                                          "externalHierarchy": {
                                            "packageName": "TQC_SEND_SMS_PKG",
                                            "procedureFunctionName": "SEND_SMS_MSG",
                                            "owner": "TQ_CRM",
                                            "externalFunctionsDtos": [
                                              {
                                                "calledPackageName": "N/A",
                                                "calledFunctionName": "TQC_SMS_MESSAGES",
                                                "packagesProcedureId": null
                                              },
                                              {
                                                "calledPackageName": "N/A",
                                                "calledFunctionName": "TQC_SMS_MESSAGES",
                                                "packagesProcedureId": null
                                              },
                                              {
                                                "calledPackageName": "PKG_GLOBAL_VARS",
                                                "calledFunctionName": "GET_PVARCHAR2",
                                                "packagesProcedureId": 30444,
                                                "externalHierarchy": {
                                                  "packageName": "PKG_GLOBAL_VARS",
                                                  "procedureFunctionName": "GET_PVARCHAR2",
                                                  "owner": "TQ_CRM",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "PARSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "BIND_VARIABLE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "EXECUTE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "VARIABLE_VALUE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "CLOSE_CURSOR",
                                                      "packagesProcedureId": null
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "calledPackageName": "TQC_PARAMETERS_PKG",
                                                "calledFunctionName": "GET_PARAM_VARCHAR",
                                                "packagesProcedureId": 28298,
                                                "externalHierarchy": {
                                                  "packageName": "TQC_PARAMETERS_PKG",
                                                  "procedureFunctionName": "GET_PARAM_VARCHAR",
                                                  "owner": "TQ_CRM"
                                                }
                                              },
                                              {
                                                "calledPackageName": "GIS_UTILITIES",
                                                "calledFunctionName": "CLNT_NAME",
                                                "packagesProcedureId": 1763,
                                                "externalHierarchy": {
                                                  "packageName": "GIS_UTILITIES",
                                                  "procedureFunctionName": "CLNT_NAME",
                                                  "owner": "TQ_GIS",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "GIN_PARAMETERS_PKG",
                                                      "calledFunctionName": "GET_PARAM_VARCHAR",
                                                      "packagesProcedureId": 6236,
                                                      "externalHierarchy": {
                                                        "packageName": "GIN_PARAMETERS_PKG",
                                                        "procedureFunctionName": "GET_PARAM_VARCHAR",
                                                        "owner": "TQ_GIS"
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "calledPackageName": "TQC_SMS_PKG",
                                                "calledFunctionName": "SEND_INSTANT_SMS",
                                                "packagesProcedureId": 28785,
                                                "externalHierarchy": {
                                                  "packageName": "TQC_SMS_PKG",
                                                  "procedureFunctionName": "SEND_INSTANT_SMS",
                                                  "owner": "TQ_CRM",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "UTL_URL",
                                                      "calledFunctionName": "ESCAPE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "N/A",
                                                      "calledFunctionName": "CHR",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_URL",
                                                      "calledFunctionName": "ESCAPE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_OUTPUT",
                                                      "calledFunctionName": "PUT_LINE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "SET_PROXY",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "BEGIN_REQUEST",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "SET_HEADER",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "WRITE_TEXT",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "GET_RESPONSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "READ_TEXT",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "N/A",
                                                      "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "END_RESPONSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "TQC_SEND_SMS_PKG",
                                                      "calledFunctionName": "SEND_INSTANT_SMS",
                                                      "packagesProcedureId": 30213,
                                                      "externalHierarchy": {
                                                        "packageName": "TQC_SEND_SMS_PKG",
                                                        "procedureFunctionName": "SEND_INSTANT_SMS",
                                                        "owner": "TQ_CRM",
                                                        "externalFunctionsDtos": [
                                                          {
                                                            "calledPackageName": "UTL_URL",
                                                            "calledFunctionName": "ESCAPE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "N/A",
                                                            "calledFunctionName": "CHR",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_URL",
                                                            "calledFunctionName": "ESCAPE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "DBMS_OUTPUT",
                                                            "calledFunctionName": "PUT_LINE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_PROXY",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_WALLET",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "BEGIN_REQUEST",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_HEADER",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "WRITE_TEXT",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "GET_RESPONSE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "READ_TEXT",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "N/A",
                                                            "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "END_RESPONSE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "TQC_PARAMETERS_PKG",
                                                            "calledFunctionName": "GET_PARAM_VARCHAR",
                                                            "packagesProcedureId": 28298,
                                                            "externalHierarchy": {
                                                              "packageName": "TQC_PARAMETERS_PKG",
                                                              "procedureFunctionName": "GET_PARAM_VARCHAR",
                                                              "owner": "TQ_CRM"
                                                            }
                                                          },
                                                          {
                                                            "calledPackageName": "TQC_PARAMETERS_PKG",
                                                            "calledFunctionName": "GET_PARAM_VARCHAR2",
                                                            "packagesProcedureId": 28299,
                                                            "externalHierarchy": {
                                                              "packageName": "TQC_PARAMETERS_PKG",
                                                              "procedureFunctionName": "GET_PARAM_VARCHAR2",
                                                              "owner": "TQ_CRM"
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "calledPackageName": "PKG_GLOBAL_VARS",
                                                "calledFunctionName": "GET_PVARCHAR2",
                                                "packagesProcedureId": 30444,
                                                "externalHierarchy": {
                                                  "packageName": "PKG_GLOBAL_VARS",
                                                  "procedureFunctionName": "GET_PVARCHAR2",
                                                  "owner": "TQ_CRM",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "PARSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "BIND_VARIABLE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "EXECUTE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "VARIABLE_VALUE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_SQL",
                                                      "calledFunctionName": "CLOSE_CURSOR",
                                                      "packagesProcedureId": null
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                "calledPackageName": "TQC_SMS_PKG",
                                                "calledFunctionName": "SEND_INSTANT_SMS",
                                                "packagesProcedureId": 28785,
                                                "externalHierarchy": {
                                                  "packageName": "TQC_SMS_PKG",
                                                  "procedureFunctionName": "SEND_INSTANT_SMS",
                                                  "owner": "TQ_CRM",
                                                  "externalFunctionsDtos": [
                                                    {
                                                      "calledPackageName": "UTL_URL",
                                                      "calledFunctionName": "ESCAPE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "N/A",
                                                      "calledFunctionName": "CHR",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_URL",
                                                      "calledFunctionName": "ESCAPE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "DBMS_OUTPUT",
                                                      "calledFunctionName": "PUT_LINE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "SET_PROXY",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "BEGIN_REQUEST",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "SET_HEADER",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "WRITE_TEXT",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "GET_RESPONSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "READ_TEXT",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "N/A",
                                                      "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "UTL_HTTP",
                                                      "calledFunctionName": "END_RESPONSE",
                                                      "packagesProcedureId": null
                                                    },
                                                    {
                                                      "calledPackageName": "TQC_SEND_SMS_PKG",
                                                      "calledFunctionName": "SEND_INSTANT_SMS",
                                                      "packagesProcedureId": 30213,
                                                      "externalHierarchy": {
                                                        "packageName": "TQC_SEND_SMS_PKG",
                                                        "procedureFunctionName": "SEND_INSTANT_SMS",
                                                        "owner": "TQ_CRM",
                                                        "externalFunctionsDtos": [
                                                          {
                                                            "calledPackageName": "UTL_URL",
                                                            "calledFunctionName": "ESCAPE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "N/A",
                                                            "calledFunctionName": "CHR",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_URL",
                                                            "calledFunctionName": "ESCAPE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "DBMS_OUTPUT",
                                                            "calledFunctionName": "PUT_LINE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_PROXY",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_WALLET",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "BEGIN_REQUEST",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "SET_HEADER",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "WRITE_TEXT",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "GET_RESPONSE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "READ_TEXT",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "N/A",
                                                            "calledFunctionName": "RAISE_APPLICATION_ERROR",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "UTL_HTTP",
                                                            "calledFunctionName": "END_RESPONSE",
                                                            "packagesProcedureId": null
                                                          },
                                                          {
                                                            "calledPackageName": "TQC_PARAMETERS_PKG",
                                                            "calledFunctionName": "GET_PARAM_VARCHAR",
                                                            "packagesProcedureId": 28298,
                                                            "externalHierarchy": {
                                                              "packageName": "TQC_PARAMETERS_PKG",
                                                              "procedureFunctionName": "GET_PARAM_VARCHAR",
                                                              "owner": "TQ_CRM"
                                                            }
                                                          },
                                                          {
                                                            "calledPackageName": "TQC_PARAMETERS_PKG",
                                                            "calledFunctionName": "GET_PARAM_VARCHAR2",
                                                            "packagesProcedureId": 28299,
                                                            "externalHierarchy": {
                                                              "packageName": "TQC_PARAMETERS_PKG",
                                                              "procedureFunctionName": "GET_PARAM_VARCHAR2",
                                                              "owner": "TQ_CRM"
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      {
                        "calledPackageName": "TQC_EMAIL_PKG",
                        "calledFunctionName": "CREATE_EMAIL_MSG",
                        "packagesProcedureId": 29845,
                        "externalHierarchy": {
                          "packageName": "TQC_EMAIL_PKG",
                          "procedureFunctionName": "CREATE_EMAIL_MSG",
                          "owner": "TQ_CRM"
                        }
                      },
                      {
                        "calledPackageName": "TQC_EMAIL_PKG",
                        "calledFunctionName": "SEND_MAIL",
                        "packagesProcedureId": 29868,
                        "externalHierarchy": {
                          "packageName": "TQC_EMAIL_PKG",
                          "procedureFunctionName": "SEND_MAIL",
                          "owner": "TQ_CRM",
                          "externalFunctionsDtos": [
                            {
                              "calledPackageName": "TQC_SEND_EMAIL_PKG",
                              "calledFunctionName": "SEND_MAIL",
                              "packagesProcedureId": 28950,
                              "externalHierarchy": {
                                "packageName": "TQC_SEND_EMAIL_PKG",
                                "procedureFunctionName": "SEND_MAIL",
                                "owner": "TQ_CRM",
                                "externalFunctionsDtos": [
                                  {
                                    "calledPackageName": "N/A",
                                    "calledFunctionName": "CESBLOBS",
                                    "packagesProcedureId": null
                                  },
                                  {
                                    "calledPackageName": "N/A",
                                    "calledFunctionName": "V_ATT_TAB",
                                    "packagesProcedureId": null
                                  },
                                  {
                                    "calledPackageName": "N/A",
                                    "calledFunctionName": "CESBLOB",
                                    "packagesProcedureId": null
                                  },
                                  {
                                    "calledPackageName": "TQC_PARAMETERS_PKG",
                                    "calledFunctionName": "GET_PARAM_VARCHAR",
                                    "packagesProcedureId": 28298,
                                    "externalHierarchy": {
                                      "packageName": "TQC_PARAMETERS_PKG",
                                      "procedureFunctionName": "GET_PARAM_VARCHAR",
                                      "owner": "TQ_CRM"
                                    }
                                  },
                                  {
                                    "calledPackageName": "TQC_EMAIL_PKG",
                                    "calledFunctionName": "GET_ACTIVE_EMAIL_SETUP",
                                    "packagesProcedureId": 29861,
                                    "externalHierarchy": {
                                      "packageName": "TQC_EMAIL_PKG",
                                      "procedureFunctionName": "GET_ACTIVE_EMAIL_SETUP",
                                      "owner": "TQ_CRM",
                                      "externalFunctionsDtos": [
                                        {
                                          "calledPackageName": "TQC_PARAMETERS_PKG",
                                          "calledFunctionName": "GET_DECODED_TEXT",
                                          "packagesProcedureId": 28292,
                                          "externalHierarchy": {
                                            "packageName": "TQC_PARAMETERS_PKG",
                                            "procedureFunctionName": "GET_DECODED_TEXT",
                                            "owner": "TQ_CRM",
                                            "externalFunctionsDtos": [
                                              {
                                                "calledPackageName": "UTL_RAW",
                                                "calledFunctionName": "CAST_TO_VARCHAR2",
                                                "packagesProcedureId": null
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "calledPackageName": "TQC_EMAIL_PKG",
                                    "calledFunctionName": "EMAIL_FILES",
                                    "packagesProcedureId": 29848,
                                    "externalHierarchy": {
                                      "packageName": "TQC_EMAIL_PKG",
                                      "procedureFunctionName": "EMAIL_FILES",
                                      "owner": "TQ_CRM",
                                      "externalFunctionsDtos": [
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "SPECIFIED",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "DO_EMAIL_FILES",
                                          "packagesProcedureId": null
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "calledPackageName": "TQC_EMAIL_PKG",
                                    "calledFunctionName": "DO_EMAIL_FILES",
                                    "packagesProcedureId": 29847,
                                    "externalHierarchy": {
                                      "packageName": "TQC_EMAIL_PKG",
                                      "procedureFunctionName": "DO_EMAIL_FILES",
                                      "owner": "TQ_CRM",
                                      "externalFunctionsDtos": [
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "CHR",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "N/A",
                                          "calledFunctionName": "RAW",
                                          "packagesProcedureId": null
                                        },
                                        {
                                          "calledPackageName": "TQC_PARAMETERS_PKG",
                                          "calledFunctionName": "GET_PARAM_VARCHAR",
                                          "packagesProcedureId": 28298,
                                          "externalHierarchy": {
                                            "packageName": "TQC_PARAMETERS_PKG",
                                            "procedureFunctionName": "GET_PARAM_VARCHAR",
                                            "owner": "TQ_CRM"
                                          }
                                        },
                                        {
                                          "calledPackageName": "TQC_PARAMETERS_PKG",
                                          "calledFunctionName": "GET_PARAM_NUMBER",
                                          "packagesProcedureId": 28295,
                                          "externalHierarchy": {
                                            "packageName": "TQC_PARAMETERS_PKG",
                                            "procedureFunctionName": "GET_PARAM_NUMBER",
                                            "owner": "TQ_CRM"
                                          }
                                        },
                                        {
                                          "calledPackageName": "TQC_PARAMETERS_PKG",
                                          "calledFunctionName": "GET_PARAM_PASSWORD",
                                          "packagesProcedureId": 28296,
                                          "externalHierarchy": {
                                            "packageName": "TQC_PARAMETERS_PKG",
                                            "procedureFunctionName": "GET_PARAM_PASSWORD",
                                            "owner": "TQ_CRM",
                                            "externalFunctionsDtos": [
                                              {
                                                "calledPackageName": "N/A",
                                                "calledFunctionName": "GET_DECODED_TEXT",
                                                "packagesProcedureId": null
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      {
        "packageName": "CREATE_NEW_CLAIM_LATEST",
        "procedureFunctionName": "UPDATE_CAL_ACTIVITY",
        "externalFunctionsDtos": [
          {
            "calledPackageName": "TQC_WEB_PKG",
            "calledFunctionName": "UPDATE_CAL_ACTIVITY",
            "packagesProcedureId": 29167,
            "externalHierarchy": {
              "packageName": "TQC_WEB_PKG",
              "procedureFunctionName": "UPDATE_CAL_ACTIVITY",
              "owner": "TQ_CRM",
              "externalFunctionsDtos": [
                {
                  "calledPackageName": "N/A",
                  "calledFunctionName": "TQC_CALENDAR_ACTIVITIES",
                  "packagesProcedureId": null
                }
              ]
            }
          }
        ]
      }
    ]  
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Function Relationship Hierarchy</h1>
          <p className="mt-2 text-sm text-gray-600">Visualizing package dependencies and function relationships</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Controls Section */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Search */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search functions or packages..."
              />
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm font-medium text-gray-700 mb-3">Legend</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-[#9C27B0] rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Package</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-[#4CAF50] rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Internal</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-[#2196F3] rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">External</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Chart Controls */}
          <div className="border-b border-gray-200 p-4 flex items-center justify-end space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              <ZoomIn className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              <ZoomOut className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chart */}
          <div className="h-[800px] overflow-auto">
            <HierarchyChart data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;