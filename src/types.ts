export interface ExternalFunction {
  calledPackageName: string;
  calledFunctionName: string;
  packagesProcedureId: number | null;
  externalHierarchy?: ExternalHierarchy;
}

export interface ExternalHierarchy {
  packageName: string;
  procedureFunctionName: string;
  owner: string;
  externalFunctionsDtos?: ExternalFunction[];
}

export interface InternalFunction {
  calledFunctionName: string | null;
}

export interface HierarchyData {
  packageName: string;
  procedureFunctionName: string;
  internalFunctionsDtos?: InternalFunction[];
  externalFunctionsDtos?: ExternalFunction[];
  externalUnknownFunctionsDtos?: ExternalFunction[];
}