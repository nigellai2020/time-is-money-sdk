import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    name: string;
    symbol: string;
}
export interface IAllowanceParams {
    owner: string;
    spender: string;
}
export interface IApproveParams {
    spender: string;
    amount: number | BigNumber;
}
export interface IBurnFromParams {
    account: string;
    amount: number | BigNumber;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    subtractedValue: number | BigNumber;
}
export interface IGetRoleMemberParams {
    role: string;
    index: number | BigNumber;
}
export interface IGrantRoleParams {
    role: string;
    account: string;
}
export interface IHasRoleParams {
    role: string;
    account: string;
}
export interface IIncreaseAllowanceParams {
    spender: string;
    addedValue: number | BigNumber;
}
export interface IMintParams {
    to: string;
    amount: number | BigNumber;
}
export interface IRenounceRoleParams {
    role: string;
    account: string;
}
export interface IRevokeRoleParams {
    role: string;
    account: string;
}
export interface ITransferParams {
    to: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    amount: number | BigNumber;
}
export declare class ERC20PresetMinterPauser extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ERC20PresetMinterPauser.ApprovalEvent;
    parsePausedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.PausedEvent[];
    decodePausedEvent(event: Event): ERC20PresetMinterPauser.PausedEvent;
    parseRoleAdminChangedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleAdminChangedEvent[];
    decodeRoleAdminChangedEvent(event: Event): ERC20PresetMinterPauser.RoleAdminChangedEvent;
    parseRoleGrantedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleGrantedEvent[];
    decodeRoleGrantedEvent(event: Event): ERC20PresetMinterPauser.RoleGrantedEvent;
    parseRoleRevokedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleRevokedEvent[];
    decodeRoleRevokedEvent(event: Event): ERC20PresetMinterPauser.RoleRevokedEvent;
    parseTransferEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.TransferEvent[];
    decodeTransferEvent(event: Event): ERC20PresetMinterPauser.TransferEvent;
    parseUnpausedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.UnpausedEvent[];
    decodeUnpausedEvent(event: Event): ERC20PresetMinterPauser.UnpausedEvent;
    DEFAULT_ADMIN_ROLE: {
        (options?: TransactionOptions): Promise<string>;
    };
    MINTER_ROLE: {
        (options?: TransactionOptions): Promise<string>;
    };
    PAUSER_ROLE: {
        (options?: TransactionOptions): Promise<string>;
    };
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    };
    balanceOf: {
        (account: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    burn: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    burnFrom: {
        (params: IBurnFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBurnFromParams, options?: TransactionOptions) => Promise<void>;
    };
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    };
    getRoleAdmin: {
        (role: string, options?: TransactionOptions): Promise<string>;
    };
    getRoleMember: {
        (params: IGetRoleMemberParams, options?: TransactionOptions): Promise<string>;
    };
    getRoleMemberCount: {
        (role: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    grantRole: {
        (params: IGrantRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IGrantRoleParams, options?: TransactionOptions) => Promise<void>;
    };
    hasRole: {
        (params: IHasRoleParams, options?: TransactionOptions): Promise<boolean>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    };
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    pause: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    paused: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    renounceRole: {
        (params: IRenounceRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRenounceRoleParams, options?: TransactionOptions) => Promise<void>;
    };
    revokeRole: {
        (params: IRevokeRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRevokeRoleParams, options?: TransactionOptions) => Promise<void>;
    };
    supportsInterface: {
        (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
    };
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    };
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    };
    unpause: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module ERC20PresetMinterPauser {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface PausedEvent {
        account: string;
        _event: Event;
    }
    interface RoleAdminChangedEvent {
        role: string;
        previousAdminRole: string;
        newAdminRole: string;
        _event: Event;
    }
    interface RoleGrantedEvent {
        role: string;
        account: string;
        sender: string;
        _event: Event;
    }
    interface RoleRevokedEvent {
        role: string;
        account: string;
        sender: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
    interface UnpausedEvent {
        account: string;
        _event: Event;
    }
}
