/*
 * This is a generated file
 * Do not edit manually.
 */

import { Address } from './Address';
import { Age } from './Age';
import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { ContactPoint } from './ContactPoint';
import { Contributor } from './Contributor';
import { Count } from './Count';
import { DataRequirement } from './DataRequirement';
import { Distance } from './Distance';
import { Dosage } from './Dosage';
import { Duration } from './Duration';
import { Expression } from './Expression';
import { Extension } from './Extension';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Money } from './Money';
import { ParameterDefinition } from './ParameterDefinition';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Ratio } from './Ratio';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { Resource } from './Resource';
import { SampledData } from './SampledData';
import { Signature } from './Signature';
import { Timing } from './Timing';
import { TriggerDefinition } from './TriggerDefinition';
import { UsageContext } from './UsageContext';

/**
 * This resource is a non-persisted resource used to pass information
 * into and back from an [operation](operations.html). It has no other
 * use, and there is no RESTful endpoint associated with it.
 */
export interface Parameters {

  /**
   * This is a Parameters resource
   */
  readonly resourceType: 'Parameters';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A parameter passed to or received from the operation.
   */
  parameter?: ParametersParameter[];
}

/**
 * A parameter passed to or received from the operation.
 */
export interface ParametersParameter {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The name of the parameter (reference to the operation definition).
   */
  name: string;

  /**
   * If the parameter is a data type.
   */
  valueBase64Binary?: string;

  /**
   * If the parameter is a data type.
   */
  valueBoolean?: boolean;

  /**
   * If the parameter is a data type.
   */
  valueCanonical?: string;

  /**
   * If the parameter is a data type.
   */
  valueCode?: string;

  /**
   * If the parameter is a data type.
   */
  valueDate?: string;

  /**
   * If the parameter is a data type.
   */
  valueDateTime?: string;

  /**
   * If the parameter is a data type.
   */
  valueDecimal?: number;

  /**
   * If the parameter is a data type.
   */
  valueId?: string;

  /**
   * If the parameter is a data type.
   */
  valueInstant?: string;

  /**
   * If the parameter is a data type.
   */
  valueInteger?: number;

  /**
   * If the parameter is a data type.
   */
  valueMarkdown?: string;

  /**
   * If the parameter is a data type.
   */
  valueOid?: string;

  /**
   * If the parameter is a data type.
   */
  valuePositiveInt?: number;

  /**
   * If the parameter is a data type.
   */
  valueString?: string;

  /**
   * If the parameter is a data type.
   */
  valueTime?: string;

  /**
   * If the parameter is a data type.
   */
  valueUnsignedInt?: number;

  /**
   * If the parameter is a data type.
   */
  valueUri?: string;

  /**
   * If the parameter is a data type.
   */
  valueUrl?: string;

  /**
   * If the parameter is a data type.
   */
  valueUuid?: string;

  /**
   * If the parameter is a data type.
   */
  valueAddress?: Address;

  /**
   * If the parameter is a data type.
   */
  valueAge?: Age;

  /**
   * If the parameter is a data type.
   */
  valueAnnotation?: Annotation;

  /**
   * If the parameter is a data type.
   */
  valueAttachment?: Attachment;

  /**
   * If the parameter is a data type.
   */
  valueCodeableConcept?: CodeableConcept;

  /**
   * If the parameter is a data type.
   */
  valueCoding?: Coding;

  /**
   * If the parameter is a data type.
   */
  valueContactPoint?: ContactPoint;

  /**
   * If the parameter is a data type.
   */
  valueCount?: Count;

  /**
   * If the parameter is a data type.
   */
  valueDistance?: Distance;

  /**
   * If the parameter is a data type.
   */
  valueDuration?: Duration;

  /**
   * If the parameter is a data type.
   */
  valueHumanName?: HumanName;

  /**
   * If the parameter is a data type.
   */
  valueIdentifier?: Identifier;

  /**
   * If the parameter is a data type.
   */
  valueMoney?: Money;

  /**
   * If the parameter is a data type.
   */
  valuePeriod?: Period;

  /**
   * If the parameter is a data type.
   */
  valueQuantity?: Quantity;

  /**
   * If the parameter is a data type.
   */
  valueRange?: Range;

  /**
   * If the parameter is a data type.
   */
  valueRatio?: Ratio;

  /**
   * If the parameter is a data type.
   */
  valueReference?: Reference;

  /**
   * If the parameter is a data type.
   */
  valueSampledData?: SampledData;

  /**
   * If the parameter is a data type.
   */
  valueSignature?: Signature;

  /**
   * If the parameter is a data type.
   */
  valueTiming?: Timing;

  /**
   * If the parameter is a data type.
   */
  valueContactDetail?: ContactDetail;

  /**
   * If the parameter is a data type.
   */
  valueContributor?: Contributor;

  /**
   * If the parameter is a data type.
   */
  valueDataRequirement?: DataRequirement;

  /**
   * If the parameter is a data type.
   */
  valueExpression?: Expression;

  /**
   * If the parameter is a data type.
   */
  valueParameterDefinition?: ParameterDefinition;

  /**
   * If the parameter is a data type.
   */
  valueRelatedArtifact?: RelatedArtifact;

  /**
   * If the parameter is a data type.
   */
  valueTriggerDefinition?: TriggerDefinition;

  /**
   * If the parameter is a data type.
   */
  valueUsageContext?: UsageContext;

  /**
   * If the parameter is a data type.
   */
  valueDosage?: Dosage;

  /**
   * If the parameter is a data type.
   */
  valueMeta?: Meta;

  /**
   * If the parameter is a whole resource.
   */
  resource?: Resource;

  /**
   * A named part of a multi-part parameter.
   */
  part?: ParametersParameter[];
}

/**
 * If the parameter is a data type.
 */
export type ParametersParameterValue = Address | Age | Annotation | Attachment | boolean | CodeableConcept | Coding |
    ContactDetail | ContactPoint | Contributor | Count | DataRequirement | Distance | Dosage | Duration | Expression |
    HumanName | Identifier | Meta | Money | number | ParameterDefinition | Period | Quantity | Range | Ratio | Reference |
    RelatedArtifact | SampledData | Signature | string | Timing | TriggerDefinition | UsageContext;
